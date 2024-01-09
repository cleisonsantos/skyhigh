const bcrypt = require("bcrypt");
const User = require("../models/User");

const create = async (user) => {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    user.password = passwordHash;
    return await User.create(user);
}

const getAll = async (user) => {
    return await User.find();
}

const getById = async (id) => {
    const user = await User.findById(id);
    return user;
}

const get = async (id) => {
    const user = await User.findById(id, 'name email isSSO createdAt updatedAt');
    return user;
}

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
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