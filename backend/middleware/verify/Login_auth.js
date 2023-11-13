require('dotenv').config();
const jwt = require('jsonwebtoken');


const fetchUser = (req, resp, next) => {
    const token = req.header('auth-token');
    if (!token) {
        resp.status(401).send("No token");
    }
    else {
        const data = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = data.user;
        next();
    }

}


module.exports = fetchUser;