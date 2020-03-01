const log = require('../log');

module.exports.getUser = (req, res) => {
    const userId = (req.params || {}).userId;
    log.debug('getUser: userId=' + userId);
    res.send('userId=' + userId);
};
