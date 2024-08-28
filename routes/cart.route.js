const express = require("express");
const { addCartItem, getCartItems } = require("../controllers/cart.controller");
const router = express.Router();

router.get("/:userid/view-items", getCartItems);

router.post("/:userid/add-item", addCartItem);


module.exports = router;
