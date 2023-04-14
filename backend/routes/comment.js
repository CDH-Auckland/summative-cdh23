const express = require('express');
const router = express.Router();

// import the controller functions
const { createComment, deleteComment, getComment } = require("../controllers/commentController");



// create comment
router.post("/", createComment);

// get comment
router.get("/:product_id", getComment);

// edit comment

// delete comment
router.delete("/:comment_id", deleteComment);

// etc etc

module.exports = router;