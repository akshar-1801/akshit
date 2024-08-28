const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistItemSchema = new Schema({
  wishlist_id: {
    type: Schema.Types.ObjectId,
    ref: "Wishlist",
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const WishlistItem = mongoose.model("WishlistItem", wishlistItemSchema);

module.exports = WishlistItem;
