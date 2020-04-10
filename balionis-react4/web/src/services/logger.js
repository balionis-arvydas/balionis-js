import * as log from 'loglevel';
import { config } from './config';
import { isEmptyString } from "../helpers";

log.setLevel(config.LOG_LEVEL);

const create = (loggerName) => !isEmptyString(loggerName) ? log.getLogger(name) : log;

export default {
    create
};


