const Incident = {
    getAll: async () => {
        return [
            {
                id: 1,
                title: 'Incident 1',
                description: 'Description 1'
            },
            {
                id: 2,
                title: 'Incident 2',
                description: 'Description 2'
            }
        ];
    }
}

const incidentsController = {
    getAll: async (req, res) => {
        try {
            const incidents = await Incident.getAll();
            res.json({
                status: 0,
                message: 'Success',
                data: incidents
            });
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = incidentsController;