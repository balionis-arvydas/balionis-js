'use strict';

const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');
const expressSession = require('express-session');
const MemoryStore = require('memorystore')(expressSession)
const config = require('config');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const routes = require('./routes');
const c = require('./constants');
const log = require('./log');
const io = require("./sockets");

const SSO_TOKEN = 'sso token';

const app = express();

const router = express.Router();

app.use(helmet());
app.use(helmet.referrerPolicy({
    policy: 'same-origin'
}));
app.use(compression());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
         winston.format.timestamp(),
         winston.format.json()
    ),
    meta: false,
    msg: (req, res) => {
        return `HTTP ${res.statusCode} ${req.method} ${res.responseTime}ms ${req.url}`;
    },
    colorize: false,
    // eslint-disable-next-line no-unused-vars
    ignoreRoute: (req, res) => { return false; }
}));

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    log.info('proxy.on(error): ', err);
});

if (config.has(c.CONFIG_WEB_PATH)) {
    app.use('/public/', express.static(config.get(c.CONFIG_WEB_PATH)));
} else {
    const webUrl = config.get(c.CONFIG_WEB_URL);
    app.use('/public/', (req, res) => {
        proxy.web(req, res, {
            target: webUrl,
            timeout: 10000,
            proxyTimeout: 10000,
        });
    });
}

const whitelist = config.get(c.CONFIG_SERVER_CORS).whitelist;
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            const msg = `Origin: ${origin} not allowed by CORS`;
            log.warn(msg);
            callback(new Error(msg));
        }
    },
    credentials: true
};
app.use(cors(corsOptions));

app.use(cookieParser(SSO_TOKEN));

const sessionTimeout = config.get(c.CONFIG_SERVER_SESSION_TIMEOUT) || 10000;
const sessionConfig = {
  secret: 'sso token',
  resave: true,
  saveUninitialized: true,
  rolling: true,
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  cookie: {
      maxAge: sessionTimeout
  }
};

const session = expressSession(sessionConfig);

app.use(session);

routes(router);

app.use(router)

app.all('/*', (req, res) => {
    // TODO: redirect to '/public'
    res.sendStatus(401);
});

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    meta: false,
    colorize: false,
}));

const PORT = process.env.PORT || 8090;

const server = app.listen(PORT, () => {
    log.info(`listening to localhost:${PORT}....`);
    log.info('press ctrl+c to quit.');
});

io.use((socket, next) => {
  session(socket.request, socket.request.res || {}, next);
});

io.attach(server, {
    pingInterval: 60000,
    pingTimeout: 60000,
});

module.exports = app
