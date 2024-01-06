const express = require('express');

const router = express.Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
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

router.use('/auth', require('./auth'));
router.use('/users', usersRouter);
router.use('/incidents', incidentsRouter);

module.exports = router;