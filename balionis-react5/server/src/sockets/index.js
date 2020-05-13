const io = require('socket.io')();
const config = require('config');

const c = require('../constants');
const log = require('../log');

const userController = require('../controllers/userCtrl');

const whitelist = config.get(c.CONFIG_SERVER_CORS).whitelist;

io.origins((origin, callback) => {
    log.info(`io.origins: origin=${origin}`);
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
    } else {
        const msg = `Origin: ${origin} not allowed by CORS`;
        log.warn(msg);
        callback(new Error(msg), false);
    }
});

io.on("connection", (socket) => {
    log.info("io.on(connection): client connected");

    socket.on("getUser", (msg) => {
        log.info("io.on(getUser): msg=" + JSON.stringify(msg));
        userController.getUser(msg, (response) => {
            log.info(`io.on(getUser): response=${response}`);
            socket.emit('getUser', response);
        });
    });

    socket.on("disconnect", () => {
        log.info("io.on(connection): client disconnected");
    });
});

module.exports = io;
