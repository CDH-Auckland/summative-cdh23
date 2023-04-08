const express = require('express');

const router = express.routes;

//controller function
const { loginUser, signupUser } = require('../controllers/userController.js');



//login route
router.get('/login', loginUser);



//signup routes

router.get('/signup', signupUser);


module.exports = router;

