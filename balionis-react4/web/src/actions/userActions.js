import axios from '../services/axiosService';
import logger from '../services/logger';

const rest = axios.create();
const log = logger.create('userActions');

export const readUser = async (userId) => {
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
