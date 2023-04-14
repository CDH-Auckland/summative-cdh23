const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const getAcc = async (req, res, next) => {
    console.log("user id", req.params.id);

    try {
        const user = await User.find({ _id: req.params.id }).select("-password");

        console.log("user first name", user);

        if (Object.keys(user).length === 0) {
            throw Error("Account not found");
        } else {
            res.status(200).json(user);

            res.end();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });

        res.end();
    }
};

const editAcc = async (req, res, next) => {
    const { user_id, first_name, last_name, email, password } = req.body;
    console.log(user_id, first_name, last_name, email, password);

    try {

        if (!email || !first_name || !last_name) {
            throw Error('All fields must be filled');
        }
        if (!validator.isEmail(email)) {
            throw Error('Email is not valid');
        }
        const account = await User.findById(user_id);
        account.first_name = first_name;
        account.last_name = last_name;
        account.email = email;
        if (password) {
            if (!validator.isStrongPassword(password)) {
                throw Error('Password is not strong enough');
            }
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            account.password = hash;
        }
        account.save();
        // console.log(account.OK);
        res.status(200).json(account);
        res.end();

    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
};

const deleteAcc = async (req, res, next) => { };

module.exports = { getAcc, editAcc, deleteAcc };
