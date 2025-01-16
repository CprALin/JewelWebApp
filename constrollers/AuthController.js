const {hashPassword , verifyPassword} = require('../utils/cryptPassword');
const sql = require('mssql');
const {executeStoredProcedure , readStoredProcedure , executeOutStoredProcedure , insertStoredProcedure} = require('../utils/sqlCommand');
const {sendResponse} = require('../utils/appError');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

const signToken = id => {
    return jwt.sign({id} , process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_EXPIRES_IN
    });
}

const createSendToken = (user, statusCode , res) => {
    const token = signToken(user._id);
    const cookieExpiryDays = parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10); 
    const cookieOptions = {
        expires : new Date(Date.now() + cookieExpiryDays * 24 * 60 * 60 * 1000),
        httpOnly : true
    };

    res.cookie('jwt' , token , cookieOptions);

    user.password = undefined;
    
    sendResponse(res , statusCode , 'success' , { token , data : {user}} );
}

exports.signup = catchAsync(async (req , res) => {

        const {userName , email , password} = req.body;

        const pass = await hashPassword(password);

        const result = await executeStoredProcedure(
            'RegisterUser', 
            { 
              UserName : { type : sql.VarChar , value : userName } ,
              Email : { type : sql.VarChar , value : email },
              Password : { type : sql.VarChar , value : pass }   
            },
            { 
              Success : sql.Bit
            }
        );

        const success = result.output.Success;

        if(success)
        {
            sendResponse(res , 200 , true , { message : true});
        }else{
            sendResponse(res , 400 , false , { message : false});
        }

});

exports.login = catchAsync(async (req , res) => {

    const { email , password } = req.body;

    const user = await insertStoredProcedure(
        'SelectUserPassword',
        {
            Email : { type : sql.VarChar , value : email}
        }
    );
    
    const userPassword = user.recordset[0].UserPassword;

    const verifiedPassword = await verifyPassword(password , userPassword);

    if(verifiedPassword)
    {
        const login = await executeStoredProcedure(
            'LoginUser',
            {   
                Email : { type : sql.VarChar , value : email }
            },
            {
                Success : sql.Bit,
                CurrUserId : sql.Int
            }
        );        

        const success = login.output.Success;
        const currUser = login.output.CurrUserId;

        if(success)
        {
            createSendToken(currUser , 200 , res);
        }
    }else{
        sendResponse(res , 400 , false , { message : 'Login failed . Inavalid email or password !'});
    }
});

/* exports.test = catchAsync(async (req , res) => {
    sendResponse(res , 200 , true , {message : 'Server is connected .'});
}); */