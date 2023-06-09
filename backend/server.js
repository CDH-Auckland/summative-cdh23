const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require('./routes/user');
const itemsRoutes = require('./routes/items');
const listedItemsRoutes = require('./routes/listed');
const orderedItemsRoutes = require('./routes/orderHistory');
const wishlistRoutes = require('./routes/wishlist');
const cartRoutes = require('./routes/cart');
const commentRoutes = require('./routes/comment');

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/items-image", express.static("uploads"));

// routes
app.use('/api/user', userRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/listed', listedItemsRoutes);
app.use('/api/order', orderedItemsRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/comment', commentRoutes);



//MongoDB server
mongoose.connect(process.env.DB_URL).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  console.log("connected to database");
  app.listen(port, () => {
    console.log("server listening on http://localhost:" + port);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});
