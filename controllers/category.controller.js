const Category = require("../models/category.model");

const getCategories = async (req, res) => {
  try {
    const catList = await Category.find();
    res.status(200).json(catList);
  } catch (err) {
    res.status(500).json({ message: "Categories not found" });
  }
};

module.exports = {
  getCategories,
};
