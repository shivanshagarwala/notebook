const express = require('express');
const { createUser, LoginUser } = require('../all_tasks/auth');
const fetchUser = require('../middleware/verify/Login_auth');
const router = express.Router();


router.route('/signup').post(createUser);
router.route('/login').post(LoginUser);

module.exports = router;