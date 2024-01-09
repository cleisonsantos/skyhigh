const incidentsService = require('../services/incidentsService');

const incidentsController = {
    getAll: async (req, res) => {
        try {
            const incidents = await incidentsService.getAll();
            res.json({ status: 0, message: 'Success', data: incidents });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    updateIncidentStatus: async (req, res) => {
        try {
            await incidentsService.updateIncidentStatus({
                incidentId: req.params.id,
                status: req.body.status,
                policyName: req.body.policyName
            }, req.user);
            res.json({ status: 0, message: 'Success', data: { incidentId: req.params.id } });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = incidentsController;