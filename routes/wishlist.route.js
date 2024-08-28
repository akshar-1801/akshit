const express = require("express");
const {
  addItemToWishlist,
  removeItemFromWishlist,
  getWishlistItems,
} = require("../controllers/wishlist.controller");
const router = express.Router();

router.post("/:userid/add-item", addItemToWishlist);

router.delete("/:userid/remove-item/:productid", removeItemFromWishlist);

router.get("/:userid/items", getWishlistItems);

module.exports = router;