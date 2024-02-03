require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createLog } = require('./logService');

const generateToken = async (user) => {
    const secret = process.env.JWT_SECRET;

    const expirationTime = 3600;

    const token = jwt.sign({id: user.id, email: user.email, name: user.name, role: user.role}, secret, { expiresIn: expirationTime });

    await createLog({
        operation: 'LOGIN',
        object: 'SESSÃO',
        details: `Login na aplicação pelo usuário: ${user.name}, Endereço IP:`,
        userId: user.id,
    });

    return { access_token: token, expires_in: expirationTime };
}

module.exports = { generateToken }