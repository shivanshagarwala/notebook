const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User');
const jwt = require('../middleware/Protect/jwtToken')
const login = require('../middleware/Protect/encrypt')

const createUser = async (req, resp) => {
    const { name, email, password } = req.body;
    const user = await UserSchema.findOne({ email: req.body.email });
    let success = false;
    if (user) {
        return resp.send({ success: false, error: "email alredy in use" });
    }

    else {
        const secPass = await login(password);

        const task = await UserSchema.create({
            name,
            email,
            password: secPass,
        }
        );

        const data = { user: { id: task._id } };

        const authtoken = jwt(data);
        success = true;
        resp.send({ success: true, authtoken });
        console.log(authtoken);

    }

}

const LoginUser = async (req, resp) => {
    const { email, password } = req.body;

    let user = await UserSchema.findOne({ email });
    let success = false;
    if (!user) {
        success = false
        return resp.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        success = false
        return resp.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = { user: { id: user._id } };

    const authtoken = jwt(data);
    success = true;
    resp.send({ success: true, authtoken });
    console.log(authtoken);
}



module.exports = { createUser, LoginUser };