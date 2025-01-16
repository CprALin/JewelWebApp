const sql = require('mssql');
const catchAsync = require('../utils/catchAsync');
const {sendResponse} = require('../utils/appError');
const {executeStoredProcedure} = require('../utils/sqlCommand');

exports.changeUserRole = catchAsync(async (req , res) => {
    const {UserName , Email , UserRole} = req.body;

    const result = await executeStoredProcedure(
        'AdminAddRole' , 
        {
            UserName : { type : sql.VarChar , value : UserName},
            Email : { type : sql.VarChar , value : Email},
            UserRole : { type : sql.VarChar , value : UserRole}
        },
        {
            Success : sql.Bit
        }
    );

    const success = result.output.Success;

    if(success)
    {
        sendResponse(res , 200 , 'success' , {success})
    }else{
        sendResponse(res , 200 , 'fail' , {success})
    }
});