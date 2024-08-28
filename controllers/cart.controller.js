const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

const addCartItem = async (req, res) => {
  try {
    const { userid } = req.params;
    const { product_id, quantity } = req.body;

    const cart = await Cart.findOne({ user_id: userid });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cartItem = await CartItem.findOne({ cart_id: cart._id, product_id });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new CartItem({
        cart_id: cart._id,
        product_id,
        quantity,
      });
      await cartItem.save();
    }

    cart.updated_at = new Date();
    await cart.save();

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const { userid } = req.params;

    const cart = await Cart.findOne({ user_id: userid });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartItems = await CartItem.find({ cart_id: cart._id }).populate(
      "product_id"
    );

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addCartItem, getCartItems };
