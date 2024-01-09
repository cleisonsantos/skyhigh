const axios = require('axios');

const { getById } = require('./userService');
const { createLog } = require('./logService');

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
        console.log(error);
        return error;
    }
}

const updateIncidentStatus = async ({ incidentId, policyName, status }, userId) => {
    const data = JSON.stringify([
        {
            "incidentId": `${incidentId}`,
            "changeRequests":
            {
                "WORKFLOW_STATUS": status
            }
        }
    ]);
    const config = {
        method: 'post',
        url: baseUrl + 'modifyIncidents',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basic}`,
        },
        data
    };
    try {
        const response = await axios(config);
        const incidentResponse = response.data;
        const user = await getById(userId);
        await createLog({
            userEmail: user.email,
            operation: 'UPDATE',
            object: 'INCIDENTE',
            details: `Atualização do status do incidente/politica: ${incidentId}/${policyName} para ${status}`
        });
        return incidentResponse;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    getAll,
    updateIncidentStatus,
};