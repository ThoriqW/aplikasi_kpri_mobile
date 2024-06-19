const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginUser = (req, res) => {
    const { nip, password } = req.body;

    User.getUserByNIP(nip, (error, user) => {
        if (error) {
            console.error('Error fetching user:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!user) {
            console.log('User not found for NIP:', nip);
            return res.status(404).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            if (!result) {
                console.log('Invalid password for user:', nip);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id, nip: user.nip }, 'secret_key', { expiresIn: '1h' });
            res.status(200).json({ token });
        });
    });
};

const addUser = (req, res) => {
    const { nip, password } = req.body;

    if (!nip || !password) {
        return res.status(400).json({ error: 'NIP and password are required' });
    }

    const newUser = {
        nip,
        password
    };

    User.addUser(newUser, (error, result) => {
        if (error) {
            console.error('Error adding user:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    });
};

module.exports = {
    loginUser,
    addUser
};
