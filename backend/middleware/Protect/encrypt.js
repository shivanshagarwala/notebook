const bcrypt = require('bcrypt');

const encrypt = async (value) => {
    const salt = await bcrypt.genSalt(10);
    return pass = await bcrypt.hash(value, salt);
}

module.exports = encrypt;