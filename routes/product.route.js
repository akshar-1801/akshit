const express = require("express");
const {
  getProductsList,
  getProductById,
  addProduct,
  getProductByCat,
  getRelatedProducts,
  searchProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProductsList);

router.get("/:id", getProductById);

router.get("/category/:cname", getProductByCat);

router.get("/related/:id/:cname", getRelatedProducts);

router.get("/query/:query", searchProduct);

router.post("/", addProduct);

module.exports = router;
