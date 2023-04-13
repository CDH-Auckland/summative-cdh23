const User = require("../models/userModel");

const getAcc = async (req, res, next) => {
  console.log("user id", req.params.id);

  try {
    const user = await User.find({ _id: req.params.id }).select("-password");

    console.log("user first name", user);

    if (Object.keys(user).length === 0) {
      throw Error("Account not found");
    } else {
      res.status(200).json(user);

      res.end();
    }
  } catch (error) {
    res.status(400).json({ error: error.message });

    res.end();
  }
};

const editAcc = async (req, res, next) => {};

const deleteAcc = async (req, res, next) => {};

module.exports = { getAcc, editAcc, deleteAcc };
