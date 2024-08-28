const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Category schema
const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true, // Ensure that title is required
      trim: true, // Trim any extra spaces around the title
    },
    image: {
      type: String,
      required: true, // Ensure that image URL is required
      trim: true, // Trim any extra spaces around the image URL
    },
  },
  { timestamps: true }
); // Optionally add timestamps for createdAt and updatedAt

// Create the Category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
