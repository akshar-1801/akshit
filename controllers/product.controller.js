const Product = require("../models/product.model");

const getProductsList = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.status(201).json(productsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductByCat = async (req, res) => {
  try {
    const name = req.params.cname;
    const productsList = await Product.find({ category: name });
    res.status(200).json(productsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRelatedProducts = async (req, res) => {
  try {
    const { id, cname } = req.params;
    const productList = await Product.find({
      category: cname,
      _id: { $ne: id },
    }).limit(4);
    res.status(200).json(productList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchProduct = async (req, res) => {
  try {
    const q = req.params.query;
    const productList = await Product.find({
      product_name: { $regex: q, $options: "i" },
    });
    res.status(200).json(productList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProductsList,
  getProductById,
  addProduct,
  getProductByCat,
  getRelatedProducts,
  searchProduct,
};
