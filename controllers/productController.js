const Product = require("../models/Product");
const User = require("../models/User");

// Get all products (Dashboard)
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Add product (Admin only)
exports.addProduct = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied" });
  }

  const product = await Product.create(req.body);
  res.json(product);
};