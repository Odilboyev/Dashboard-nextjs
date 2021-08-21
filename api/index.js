const axios = require('axios');
const { SET_LOADING, SET_ERROR } = require('../redux/types');

const getTodos = async (api) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${api.toLowerCase()}?_limit=12`);
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

export { getTodos }