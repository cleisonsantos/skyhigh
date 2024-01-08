const incidentsService = require('../services/incidentsService');

const incidentsController = {
    getAll: async (req, res) => {
        try {
            const incidents = await incidentsService.getAll();
            res.json({
                status: 0,
                message: 'Success',
                data: incidents
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = incidentsController;