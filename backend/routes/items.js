
const multer = require('multer')
const express = require('express');
const upload = require("../controllers/imageUpload");

const router = express.Router();




//controller function
const { getItems, getItem, addItem, updateItem, deleteItem } = require('../controllers/itemsController');


//Browse All Items route
router.get('/:category/:type', getItems);

//get selected Items details
router.get('/:id/', getItem);


//Add new item to DB
router.post('/', upload, addItem);



//Edit selecte item
router.put('/:id', updateItem);

//Delete selected item
router.delete('/:id', deleteItem);

module.exports = router;

