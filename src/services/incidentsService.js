const axios = require('axios');

const baseUrl = process.env.BASE_URL;
const basic = process.env.BASIC_AUTH;

const getAll = async () => {
    const data = JSON.stringify({
        "startTime": "2024-01-01T00:00:00.000"
    });

    const config = {
        method: 'post',
        url: baseUrl + 'queryIncidents',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basic}`,
        },
        data
    };
    try {
        const response = await axios(config);
        const incidents = response.data.body.incidents;
        return incidents;
    } catch (error) {
        console.table(error);
        return error;
    }
}

const get = async (id) => {
    const config = {
        method: 'get',
        url: baseUrl + `queryIncidents/${id}`,
        headers: {
            'Authorization': `Basic ${basic}`,
        }
    };
    try {
        const response = await axios(config);
        const incident = response.data.body.incident;
        return incident;
    } catch (error) {
        console.table(error);
        return error;
    }

    getUserIncidents = async (email) => {
        
    }
}

module.exports = {
    getAll,
    get,
};