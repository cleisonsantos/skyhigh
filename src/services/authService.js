require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createLog } = require('./logService');

const generateToken = async (user) => {
    const secret = process.env.JWT_SECRET;

    const id = user._id;

    const expirationTime = 3600;

    const token = jwt.sign({ id }, secret, { expiresIn: expirationTime });

    await createLog({
        userEmail: user.email,
        operation: 'LOGIN',
        object: 'SESSÃO',
        details: `Login na aplicação pelo usuário: ${user.name}, Endereço IP:`
    });

    return { access_token: token, expires_in: expirationTime };
}

module.exports = { generateToken }