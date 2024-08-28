const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");
const cartRoute = require("./routes/cart.route");
const wishlistRoute = require("./routes/wishlist.route");
const categoryRoute = require("./routes/category.route");

const app = express();
const cors = require("cors");

/*MIDDLEWARE*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*  */
app.get("/", (req, res) => {
  res.send("Hello from node API. This is home page");
});

/*ROUTES*/
app.use("/api/products", productRoute);

app.use("/api/users", userRoute);

app.use("/api/orders", orderRoute);

app.use("/api/cart", cartRoute);

app.use("/api/wishlist", wishlistRoute);

app.use("/api/category", categoryRoute);

mongoose
  .connect(
    "mongodb+srv://cozylad369:ZGrZsx6hc6jvhLji@cluster0.ndzaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => console.log("Database connection failed"));
