import axios from '../services/axiosService';

const rest = axios.create();

export const readUser = async (userId) => {
    const request = rest.get('/v1/user/' + userId);

    const message = await request
        .then(res => JSON.stringify(res.data))
        .catch(error => "{ \"reason\": \"" + JSON.stringify(error.message) + "\"}");

    return message;
};
