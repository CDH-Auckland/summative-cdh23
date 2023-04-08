const express = require('express');

const router = express.Router();

//controller function
const { loginUser, signupUser } = require('../controllers/userController.js');



//login route
router.post('/login', loginUser);



//signup routes

router.post('/signup', signupUser);


module.exports = router;

