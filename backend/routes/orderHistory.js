const express = require('express');

const router = express.Router();

//controller function
const { viewOrder, editOrder, deleteOrder } = require('../controllers/orderHistoryController')


//Order History get

router.get('/:user_id', viewOrder);

//Order History edit

router.put('/', editOrder);

//Order History delete
router.delete('/:id', deleteOrder);

module.exports = router;

