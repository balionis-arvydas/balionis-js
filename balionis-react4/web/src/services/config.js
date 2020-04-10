let stage = process.env.REACT_APP_STAGE || 'PROD';
let logLevel = process.env.REACT_APP_LOG_LEVEL || 'debug';

const stages = {
    LOCAL: {
        BASE_URL: 'http://localhost:8090',
    },
    DEV1: {
        BASE_URL: 'http://dev1.balionis.com:8090',
    },
    UAT1: {
        BASE_URL: 'https://uat1.balionis.com/react4',
    },
    PROD: {
        BASE_URL: 'https://www.balionis.com/react4',
    },
};

const defaultConfig = {
    LOG_LEVEL: logLevel,
    APP_STAGE: stage,
    TIMEOUT: 30000,
    HEADERS: {},
};

const stageConfig = stages[stage.toUpperCase()] || stages.PROD;

export const config = {
    ...defaultConfig,
    ...stageConfig
};
