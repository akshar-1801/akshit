const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size_list: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    image_urls: {
      type: Array,
      required: true,
    },
    materials: {
      type: Array,
      required: false,
    },
    avg_rating: {
      type: Number,
      required: false,
    },
    units_sold: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
