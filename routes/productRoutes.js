const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware.js");
const product = require("../controllers/productController.js");

router.get("/", authMiddleware, product.getProducts);
router.post("/add", authMiddleware, product.addProduct);

module.exports = router;