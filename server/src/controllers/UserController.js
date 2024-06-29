// controllers/UserController.js

const AuthService = require('../services/AuthService');

const loginUser = async (req, res) => {
    const { nip, password } = req.body;

    try {
        const result = await AuthService.login(nip, password);
        res.status(result.code).json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

const addUser = async (req, res) => {
    const { nip, password } = req.body;

    try {
        const result = await AuthService.addUser(nip, password);
        res.status(result.code).json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

module.exports = {
    loginUser,
    addUser
};
