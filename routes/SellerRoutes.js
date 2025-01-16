const express = require('express');
const SellerController = require('../constrollers/SellerController');

const router = express.Router();

router.post('/addJewel' , SellerController.addJewel);

module.exports = router;