import axios from 'axios';
import { config } from './config';
import logger from './logger';
import { isEmptyString, isEmptyObject } from '../helpers';

const log = logger.create();

const create = () => {
    const axiosConfig = {};

    if (!isEmptyString(config.BASE_URL)) {
        axiosConfig.baseURL = config.BASE_URL;
    }

    if (config.TIMEOUT > 0) {
        axiosConfig.timeout = config.TIMEOUT;
    }

    if (!isEmptyObject(config.HEADERS)) {
        axiosConfig.headers = config.HEADERS;
    }

    log.debug('create:', 'axiosConfig=' + JSON.stringify(axiosConfig));

    return axios.create(axiosConfig);
};

export default {
    create
};
