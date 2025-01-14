const express = require('express');
const AuthController = require('../constrollers/AuthController');
const UserController = require('../constrollers/UserController');


const router = express.Router();

router.post('/signup' , AuthController.signup);

router.post('/login' , AuthController.login);

router.post('/getUserById' , UserController.getUserProfile);

module.exports = router;
