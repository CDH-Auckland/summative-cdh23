const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const validator = require('validator');
const jwt = require('jsonwebtoken');



// token function

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1d' })
}


//login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        const user = await User.findOne({ email })
        console.log(user);
        if (!user) {
            throw Error('User not existed');
        } else {
            const match = await bcrypt.compare(password, user.password)
            if (!match) {
                throw Error('Incorrect password');
            }
            const _id = user._id;
            const firstName = user.first_name;
            const token = createToken(_id);
            res.status(200).json({ _id, firstName, email, token });
            res.end();
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
}

//signup user


const signupUser = async (req, res) => {

    const { first_name, last_name, email, password } = req.body;

    try {
        if (!email || !password) {
            throw Error('All fields must be filled');
        }
        if (!validator.isEmail(email)) {
            throw Error('Email is not valid');
        }
        if (!validator.isStrongPassword(password)) {
            throw Error('Password is not strong enough');
        }

        const exists = await User.findOne({ email })
        if (exists) {
            throw Error('Email already in use')
        } else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const user = await User.create({ first_name, last_name, email, password: hash });

            const _id = user._id;
            const token = createToken(_id);

            res.status(200).json({ _id, email, token });
            res.end();
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }

}

module.exports = { loginUser, signupUser };