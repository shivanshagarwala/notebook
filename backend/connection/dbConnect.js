const mongoose = require('mongoose');

const DBconnect = (url) => {
    return mongoose.connect(url);
}

module.exports = DBconnect;