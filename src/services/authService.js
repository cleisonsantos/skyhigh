require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = async (user) => {
    const secret = process.env.JWT_SECRET;

    const id = user._id;

    const token = await jwt.sign({ id }, secret);

    return token;
}

module.exports = { generateToken }