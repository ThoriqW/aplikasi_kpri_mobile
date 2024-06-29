const UserService = require('../services/UserService');

const loginUser = async (req, res) => {
    const { nip, password } = req.body;

    try {
        const result = await UserService.login(nip, password);
        res.status(result.code).json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

const addUser = async (req, res) => {
    const { nip, password } = req.body;

    try {
        const result = await UserService.addUser(nip, password);
        res.status(result.code).json(result);
    } catch (err) {
        res.status(err.code).json(err);
    }
};

module.exports = {
    loginUser,
    addUser
};
