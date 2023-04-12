const express = require('express');

const router = express.Router();

//controller function
const { loginUser, signupUser } = require('../controllers/userController.js');

const { getAcc, editAcc, deleteAcc } = require('../controllers/accountController.js');


//login route
router.post('/login', loginUser);

//signup routes

router.post('/signup', signupUser);

//account get

router.get('/account/:id', getAcc);

//account edit

router.put('/account', editAcc);

//account delete
router.delete('/account/:id', deleteAcc);

module.exports = router;

