const mongoose = require('mongoose');
const {logger} = require('../startup/logging');
const config = require('config');

module.exports = function () {
    mongoose.connect(config.get('db'), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            logger.debug('MongoDBga ulanish hosil qilindi...');
        });
    mongoose.set('useFindAndModify', false);
}