const config = require('config');

module.exports = function () {
    if (!config.get('jwtPrivateKey')) {
       throw new error('JIDDIY XATO: jwt muhiti aniqlanmadi!');
    }
}