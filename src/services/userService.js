const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const prisma = new PrismaClient();

const create = async (user) => {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    user.password = passwordHash;
    const data = { name: user.name, email: user.email, password: user.password }
    const createdUser = await prisma.user.create({ data });
    return createdUser;
    return await User.create(user);
}

const getAll = async () => {
    const users = await prisma.user.findMany({ select: { id: true, name: true, email: true, profile: true, isSSO: true, createdAt: true, updatedAt: true } });
    return users;
    return await User.find();
}

const getById = async (id) => {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
}

const get = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            profile: true,
            isSSO: true,
            createdAt: true,
            updatedAt: true
        }
    });
    return user;
}

const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
}

// check if password match
const checkPassword = async (password, userPassword) => {
    const result = await bcrypt.compare(password, userPassword);
    return result;
}

module.exports = {
    create,
    getAll,
    getById,
    get,
    getUserByEmail,
    checkPassword
}