
// import multer to handle image uploads
const multer = require("multer");

const fileName = {};

// create a storage object to tell multer where to store the images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

// create a filter to only accept images
const fileFilter = (req, file, cb) => {
    // reject a file if it isn't a jpeg or png
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // return true to accept the file
        cb(null, true);
    } else {
        /* 
          Note, multer has it's own way of checking for this that involves returning a new Error, 
          but this causes an unhandled exception in the server, so we'll use the req object to pass the error to the route handler instead
        */
        // set an error on the request object, which can be accessed in the route handler
        req.fileValidationError = "Only jpeg and png images are allowed";
        // return false to reject the file
        return cb(null, false);
    }
};

const upload = multer({
    storage,
    limits: {
        files: 4, // only accept one file per request
        fileSize: 1024 * 1024, // accept only files smaller than 1 MB
    },
    fileFilter,
}).array("images");



// create the multer middleware
module.exports = upload;
