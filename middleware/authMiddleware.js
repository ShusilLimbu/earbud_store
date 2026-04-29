// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ msg: "No token" });

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   req.user = decoded;
//   next();
// };

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // Handle "Bearer <token>" OR raw token
    if (token.startsWith("Bearer ")) {
      token = token.slice(7).trim();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();

  } catch (err) {
    return res.status(401).json({
      msg: "Invalid or expired token"
    });
  }
};