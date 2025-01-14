const path =  require('path');
const express = require('express');
//const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
//const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const userRouter = require('./routes/UserRoutes');
const {sendResponse} = require('./utils/appError');

// framework used for Restful API 
const app = express();

app.use(helmet());

/*
const limiter = rateLimit({
    max : 100,
    windowMs : 60 * 60 * 1000,
    message : 'Too many requests from this IP , please try again in an hour!' 
});

app.use('/api' , limiter);
*/

app.use(express.json({ limit : '10kb'}));

app.use(cookieParser());

app.use(xss());

app.use(cors({
    origin : 'http://localhost:5173',
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE' , 'OPTIONS'],
    credentials : true
}));

app.use('/api/v1/users' , userRouter);

app.all('*' , (req, res ,next) => {
    next(sendResponse(res , 500 , false ,{message : `Can't find ${req.originalUrl} on this server!`}));
});

module.exports = app;

