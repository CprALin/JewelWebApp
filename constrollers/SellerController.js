const sql = require('mssql');
const catchAsync = require('../utils/catchAsync');
const {sendResponse} = require('../utils/appError');
const {executeStoredProcedure, insertStoredProcedure} = require('../utils/sqlCommand');

exports.addJewel = catchAsync(async (req , res) => {
    const { JewelName , 
            JewelDescription , 
            JewelPrice ,
            JewelDiscount , 
            JewelMaterial , 
            JewelWeight , 
            JewelLength , 
            JewelCategory ,
            JewelStockQuantity ,
            JewelBrand ,
            JewelStatus} = req.body;
    
    await insertStoredProcedure(
        'AddJewel',
        {
            JewelName : { type : sql.VarChar , value : JewelName},
            JewelDescription : { type : sql.VarChar , value : JewelDescription},
            JewelPrice : { type : sql.Decimal , value : JewelPrice},
            JewelDiscount : { type : sql.Decimal , value : JewelDiscount},
            JewelMaterial : { type : sql.VarChar , value : JewelMaterial},
            JewelWeight : { type : sql.Decimal , value : JewelWeight},
            JewelLength : { type : sql.Decimal , value : JewelLength},
            JewelCategory : { type : sql.VarChar , value : JewelCategory},
            JewelStockQuantity : { type : sql.Int , value : JewelStockQuantity},
            JewelBrand : { type : sql.VarChar , value : JewelBrand},
            JewelStatus : { type : sql.VarChar , value : JewelStatus}
        }
    )
    
})