const Cart = require("../models/cart.model");
const User = require("../models/user.model");
const Wishlist = require("../models/wishlist.model");

const getUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(201).json(userList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists. Please Login.." });
    }

    const createdUser = await User.create(req.body);

    const newCart = new Cart({
      user_id: createdUser._id,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await newCart.save();

    const newWishlist = new Wishlist({
      user_id: createdUser._id,
      created_at: new Date(),
    });
    await newWishlist.save();

    const userResponse = createdUser.toObject();
    delete userResponse.password;

    res.status(201).json(userResponse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || req.body.password != user.password) {
      return res.status(201).json({ message: "Invalid Email or Password" });
    }
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(500).json(userResponse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  addUser,
  loginUser,
};
