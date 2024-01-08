require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = async (user) => {
    const secret = process.env.JWT_SECRET;

    const id = user._id;

    const expirationTime = 3600;

    const token = await jwt.sign({ id }, secret, { expiresIn: expirationTime });

    return { access_token: token, expires_in: expirationTime };
}

module.exports = { generateToken }