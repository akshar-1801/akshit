const express = require("express");
const {
  getOrdersByUser,
  getOrdersByDate,
  getAllOrders,
  getOrdersbyStatus,
  createOrder,
} = require("../controllers/order.controller");

const router = express.Router();

router.get("/", getAllOrders);

router.get("/status/:status", getOrdersbyStatus);

router.get("/user/:userid", getOrdersByUser);

router.get("/date/:date", getOrdersByDate);

router.post("/create-order/:userid", createOrder);

module.exports = router;
