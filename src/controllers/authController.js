
const authService = require('../services/authService');

const { getUserByEmail, checkPassword } = require('../services/userService');

const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        // validations
        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório!" });
        }

        if (!password) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
        }

        // check if user exists
        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }

        if (!checkPassword(password, user.password)) {
            return res.status(422).json({ msg: "Senha inválida" });
        }

        try {
            const serialized = await authService.generateToken(user);
            res.setHeader('Set-Cookie', serialized);
            res.status(200).json({
                msg: "Autenticação realizada com sucesso!",
                success: true,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

module.exports = authController;