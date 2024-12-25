const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password , salt);
}

async function verifyPassword(password , hashPassword) {
    return bcrypt.compare(password , hashPassword);
}

module.exports = {hashPassword , verifyPassword}