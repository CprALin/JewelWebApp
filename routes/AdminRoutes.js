const express = require("express");
/* const verifyToken = require("../constrollers/AuthMiddleware"); */
const AdminController = require("../constrollers/AdminController");

const router = express.Router();

router.post('/addRole' , AdminController.changeUserRole);

module.exports = router;