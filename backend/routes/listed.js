const multer = require('multer')
const express = require('express');
const upload = require("../controllers/imageUpload");

const router = express.Router();

//controller function
const { viewListed, editListed, deleteListed } = require('../controllers/listedController')


//listed item get

router.get('/:user_id', viewListed);

//listed item edit

router.put('/', editListed);

//listed item delete
router.delete('/:id', deleteListed);

module.exports = router;

