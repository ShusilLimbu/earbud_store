const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware.js");
const product = require("../controllers/productController.js");

router.get("/", authMiddleware, product.getProducts);

//admin
router.post("/add", authMiddleware, product.addProduct);
router.post("/update", authMiddleware, product.updateProduct);
router.post("/delete", authMiddleware, product.deleteProduct);


module.exports = router;