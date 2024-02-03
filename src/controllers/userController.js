const { create, getAll, get } = require('../services/userService')

const userController = {
    getAll: async (req, res) => {
        const users = await getAll();
        res.json({
            status: 0,
            message: 'List of all users',
            data: users
        });
    },
    getById: async (req, res) => {
        const user = await get(req.params.id * 1)
        res.json({
            status: 0,
            message: 'success',
            data: user
        });
    },
    create: async (req, res) => {
        const user = await create({ ...req.body });
        res.status(201).json({
            status: 0,
            message: 'user created',
            data: { id: user.id, name: user.name, email: user.email }
        });
    },
    update: async (req, res) => {
        res.send('update user');
    },
    delete: async (req, res) => {
        res.send('delete user');
    }
}

module.exports = userController;