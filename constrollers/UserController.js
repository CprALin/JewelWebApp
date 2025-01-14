const sql = require('mssql');
const catchAsync = require('../utils/catchAsync');
const {sendResponse} = require('../utils/appError');
const {executeStoredProcedure} = require('../utils/sqlCommand');


exports.getUserProfile = catchAsync(async (req , res) => {
    const {userId} = req.body;

    const result = await executeStoredProcedure(
        'SelectUserProfile' , 
        {
            UserId : { type : sql.Int , value : userId}
        },
        {
            Success : sql.Bit
        }
    );

    const success = result.output.Success;
    const response = result.recordset;

    if(success)
    {
        sendResponse(res , 200 , 'success' , {response})
    }
});

