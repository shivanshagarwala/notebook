const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWTtoken = (pass) => {
    return authtoken = jwt.sign(pass, process.env.JWT_TOKEN);
}

module.exports = JWTtoken;