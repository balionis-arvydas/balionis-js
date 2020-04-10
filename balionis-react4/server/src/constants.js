const ERRORS = Object.freeze({
    E1001: { code: "E1001", message: "User {0} must be a number."},
});

module.exports = Object.freeze({
    "CONFIG_SERVER_LOG_LEVEL": "server.logLevel",
    "CONFIG_SERVER_SESSION_TIMEOUT": "server.sessionTimeout",
    "CONFIG_SERVER_CORS": "server.CORS",
    "CONFIG_WEB_PATH": "web.path",
    "CONFIG_WEB_URL": "web.url",
    "ERRORS": ERRORS,
});
