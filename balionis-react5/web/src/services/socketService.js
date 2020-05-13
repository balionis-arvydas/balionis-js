import socketIOClient from 'socket.io-client';
import { config } from './config';
import logger from './logger';
import { isEmptyString, isEmptyObject } from '../helpers';

const log = logger.create();

const create = () => {
    const socketConfig = {};

    if (!isEmptyString(config.BASE_URL)) {
        socketConfig.baseURL = config.BASE_URL;
    }

    if (config.TIMEOUT > 0) {
        socketConfig.timeout = config.TIMEOUT;
    }

    if (!isEmptyObject(config.HEADERS)) {
        socketConfig.headers = config.HEADERS;
    }

    log.debug('create:', 'socketConfig=' + JSON.stringify(socketConfig));

    const socketIo = socketIOClient(socketConfig.baseURL, {
        transports: ["websocket"],
    });

    const emit = (event, args) => socketIo.emit(event, args);
    const on = (event, func) => socketIo.on(event, func);
    const off = (event, func) => socketIo.off(event, func);

    return { emit, on, off };
};

const socket = create();

export const getSocket = () => {
    return socket;
};
