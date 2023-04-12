
const multer = require('multer')
const express = require('express');
const upload = require("../controllers/imageUpload");

const router = express.Router();




//controller function
const { getItems, getItem, addItem } = require('../controllers/itemsController');


//Browse View all Items route
router.get('/:category/:type', getItems);

//get selected Items details
router.get('/:id/', getItem);


//Add new item to DB
router.post('/', upload, addItem);



module.exports = router;

