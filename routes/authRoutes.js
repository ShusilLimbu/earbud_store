const router = require("express").Router();
const auth = require("../controllers/authController.js");

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.post("/forgot", auth.forgotPassword);
router.post("/reset", auth.resetPassword);

module.exports = router;