const Wishlist = require("../models/wishlist.model");
const WishlistItem = require("../models/wishlistItem.model");
const Product = require("../models/product.model");

const addItemToWishlist = async (req, res) => {
  try {
    const { userid } = req.params;
    const { product_id } = req.body;

    const wishlist = await Wishlist.findOne({ user_id: userid });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let wishlistItem = await WishlistItem.findOne({
      wishlist_id: wishlist._id,
      product_id,
    });
    if (wishlistItem) {
      return res.status(400).json({ message: "Product already in wishlist" });
    } else {
      wishlistItem = new WishlistItem({
        wishlist_id: wishlist._id,
        product_id,
      });
      await wishlistItem.save();
    }

    res.status(201).json(wishlistItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeItemFromWishlist = async (req, res) => {
  try {
    const { userid, productid } = req.params;

    const wishlist = await Wishlist.findOne({ user_id: userid });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const wishlistItem = await WishlistItem.findOneAndDelete({
      wishlist_id: wishlist._id,
      product_id: productid,
    });
    if (!wishlistItem) {
      return res.status(404).json({ message: "Wishlist item not found" });
    }

    res.status(200).json({ message: "Item removed from wishlist" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWishlistItems = async (req, res) => {
  try {
    const { userid } = req.params;

    const wishlist = await Wishlist.findOne({ user_id: userid });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const wishlistItems = await WishlistItem.find({
      wishlist_id: wishlist._id,
    }).populate("product_id");

    res.status(200).json(wishlistItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addItemToWishlist,
  removeItemFromWishlist,
  getWishlistItems,
};
