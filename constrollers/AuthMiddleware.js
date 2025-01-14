const jwt = require('jsonwebtoken');
const { sendResponse } = require('../utils/appError');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer') 
        ? req.headers.authorization.split(' ')[1] 
        : null;

    if (!token) {
        return sendResponse(res, 401, false, { message: 'You are not authorized! Token missing!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return sendResponse(res, 401, false, { message: 'Invalid or expired token!' });
        }


        req.user = decoded;
        
        console.log('Token is valid, user has access:', req.user);

        next(); 
    });
};

module.exports = verifyToken;

