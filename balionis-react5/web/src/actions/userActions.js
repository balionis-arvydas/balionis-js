import axios from '../services/axiosService';
import { getSocket } from '../services/socketService';
import logger from '../services/logger';

const rest = axios.create();
const log = logger.create('userActions');

export const readUserWithRest = async (userId) => {
    const url = '/v1/user/' + userId;
    log.debug('readUser:', 'url=' + url);

    const request = rest.get(url);

    const message = await request
        .then(res => {
            const data = JSON.stringify(res.data);
            log.debug('readUser:', 'data=' + data);
            return data;
        }).catch(error => {
            log.warn('readUser:', 'error=' + error);
            return "{ \"reason\": \"" + JSON.stringify(error.message) + "\"}";
        });

    return message;
};

export const readUserWithSocket = async (userId) => {
    log.debug("readUser:", `userId=${userId}`);

    const promise = new Promise(resolve => {
        const socket = getSocket();
        socket.emit("getUser", { userId });

        const handler = async (message) => {
            socket.off("getUser", handler);
            resolve(message);
        };
        socket.on("getUser", handler);
    });

    return promise;
};

export const readUser = async (userId, useSocket) => {
    const fn = useSocket ? readUserWithSocket : readUserWithRest;
    return fn(userId);
};
