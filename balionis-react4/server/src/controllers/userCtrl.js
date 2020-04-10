const uuid = require('react-uuid');
const c = require('../constants');
const log = require('../log');
const { User, GetUserResponse, ErrorResponse } = require('../types');

module.exports.getUser = (req, res) => {
    const userId = (req.params || {}).userId;
    let response;
    if (!isNaN(parseInt(userId))) {
        const user = new User(userId);
        response = new GetUserResponse(uuid(), user);
    } else {
        response = new ErrorResponse(uuid(), c.ERRORS.E1001.code, c.ERRORS.E1001.message, [userId]);
    }
    log.debug('getUser: response=' + JSON.stringify(response));
    res.send(JSON.stringify(response));
};
