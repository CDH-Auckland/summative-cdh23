
//Import model schema for items
const Items = require('../models/itemModel');



// get all items id, price & name
const getItems = async (req, res) => {
    const category = req.params.category;
    const type = req.params.type;
    console.log("category,type", category, type);

    try {
        var items = null;


        if (category === "all" && type === "all") {
            console.log("Fetch all");
            items = await Items.find();
        } else if (category === "all") {
            items = await Items.find({ type: type });
        } else if (type === "all") {
            items = await Items.find({ category: category });
        } else {
            items = await Items.find({ category: category, type: type });
        }

        console.log("items", items);
        console.log("items.length", items.length);

        if (items.length == 0) {
            throw Error('Item not existed');
        } else {
            res.status(200).json(items);
            res.end();
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }

}



const getItem = async (req, res) => {

    console.log("req.params.id", req.params.id);
    try {
        const items = await Items.findById(req.params.id);
        console.log("items", items);
        console.log("items.length", items.length);

        if (!items) {
            throw Error('Item not existed');
        } else {
            res.status(200).json(items);
            res.end();
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
}



//Add new item to the DB
const addItem = async (req, res) => {
    const stock = "A";
    const { user_id, name, description, price, category, type } = req.body;
    const { files } = req;

    var imgUrl1 = "empty";
    var imgUrl2 = "empty";
    var imgUrl3 = "empty";
    var imgUrl4 = "empty";

    console.log(imgUrl1, imgUrl2, imgUrl3, imgUrl4);

    for (i = 0; i < files.length; i++) {
        if (i == 0) {
            imgUrl1 = files[i].filename;
        }
        if (i == 1) {
            imgUrl2 = files[i].filename;
        }
        if (i == 2) {
            imgUrl3 = files[i].filename;
        }
        if (i == 3) {
            imgUrl4 = files[i].filename;
        }
    }

    console.log(imgUrl1, imgUrl2, imgUrl3, imgUrl4);

    try {

        if (!files || !user_id) {
            throw Error("Bad request");
        }

        if (!name || !description || !price || !category || !type) {
            throw Error('All fields must be filled');
        }
        const stock = "A";
        const items = await Items.create({ user_id, name, description, price, category, type, stock, imgUrl1, imgUrl2, imgUrl3, imgUrl4 });
        const msg = "Item added successfully";
        res.status(200).json({ msg: msg });
        res.end();
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.end();
    }
}

module.exports = { getItems, getItem, addItem };