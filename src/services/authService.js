require('dotenv').config();
const jwt = require('jsonwebtoken');
const { createLog } = require('./logService');
const { serialize } = require('cookie');

const generateToken = async (user) => {
    const secret = process.env.JWT_SECRET;

    const expirationTime = process.env.EXPIRATION_TIME * 1;

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name, profile: user.profile }, secret, { expiresIn: expirationTime });

    await createLog({
        operation: 'LOGIN',
        object: 'SESSÃO',
        details: `Login na aplicação pelo usuário: ${user.name}, Endereço IP:`,
        userId: user.id,
    });

    const serialized = serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: process.env.EXPIRATION_TIME,
        path: '/'
    });

    return serialized;
}

module.exports = { generateToken }