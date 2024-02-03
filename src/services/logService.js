const { PrismaClient } = require('@prisma/client');
const Log = require('../models/Log.js');

const prisma = new PrismaClient();

const createLog = async (logObj) => {
    const log = await prisma.log.create({ data: logObj });
    console.log(log);
}

module.exports = {
    createLog
};