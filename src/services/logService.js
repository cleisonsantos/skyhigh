const Log = require('../models/Log.js');

const createLog = async (logObj) => {
    const log = new Log(logObj);
    const storedLog = await log.save();
    console.log(storedLog);
}

module.exports = {
    createLog
};