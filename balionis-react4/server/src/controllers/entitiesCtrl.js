const log = require('../log');

module.exports.getEntity = (req, res) => {
    const entityId = (req.params || {}).entityId;
    log.debug('getEntity: entityId=' + entityId);
    res.send('entityId=' + entityId);
};
