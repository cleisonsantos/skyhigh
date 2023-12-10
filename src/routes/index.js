const express = require('express');

const router = express.Router();

const incidentsRouter = require('./incidents');

router.get('/', (req, res) => {
    res.json({
        status: 0,
        message: 'Success',
        data: {
            name: 'Skyhigh API',
            version: '1.0.0',
        }
    });
});

router.use('/incidents', incidentsRouter)

module.exports = router;