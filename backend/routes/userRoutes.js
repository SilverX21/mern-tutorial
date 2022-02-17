const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
//aqui estamos a passar o protect para aumentar a segurança deste endpoint. o protect é uma função que está no authMiddleware
router.get("/me", protect, getMe);

module.exports = router;
