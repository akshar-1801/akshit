const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    order_datetime: {
      type: Date,
      required: true,
      default: Date.now,
    },

    shipping_date: {
      type: Date,
      required: true,
    },
    delivery_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    total_price: {
      type: Number,
      required: true,
    },
    delivery_charge: {
      type: Number,
      required: true,
    },
    total_amount: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
      enum: ["Credit Card", "Debit Card", "PayPal", "Cash on Delivery"],
    },
    shipping_address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
