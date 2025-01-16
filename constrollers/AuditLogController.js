const sql = require('mssql');
const catchAsync = require('../utils/catchAsync');
const {sendResponse} = require('../utils/appError');
const {executeStoredProcedure, insertStoredProcedure} = require('../utils/sqlCommand');

exports.auditLog = catchAsync(async (req , res) => {
    const {UserId , ActionType , TableName , ActionDescription , IpAddress} = req.body;

    await insertStoredProcedure(
        'AddAuditLogEntry',
        {
            UserId : { type : sql.Int , value : UserId},
            ActionType : { type : sql.VarChar , value : ActionType},
            TableName : { type : sql.VarChar , value : TableName},
            ActionDescription : { type : sql.VarChar , value : ActionDescription},
            IpAddress : { type : sql.VarChar , value : IpAddress}
        }
    )
})