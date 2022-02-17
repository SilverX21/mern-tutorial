//aqui vamos usar os token jwt para a sessão e o bcrypt para encriptar passwords
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 * @desc    register new user
 * @route    POST /api/users
 * @access   Public
 * @param {*} req -> request
 * @param {*} res -> response
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields!");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("This user already exists!");
  }

  //encriptar password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); //aqui encriptamos a password

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword, //aqui passamos a password encriptada
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/**
 * @desc    authenticate user
 * @route    POST /api/users/login
 * @access   Public
 * @param {*} req -> request
 * @param {*} res -> response
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }

  res.json({ message: "Login User" });
});

/**
 * @desc    Get user data
 * @route    GET /api/users/me
 * @access   Private
 * @param {*} req -> request
 * @param {*} res -> response
 */
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id); //o req.user é o user que tiver autenticado

  res.status(200).json({ id: _id, name, email });
});

//Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" }); //30d -> expira em 30 dias
};

module.exports = { registerUser, loginUser, getMe };
