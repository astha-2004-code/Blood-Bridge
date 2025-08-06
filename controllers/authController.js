const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ============================================
// @desc    Register new user
// @route   POST /api/v1/auth/register
// ============================================
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // Save new user
    const user = new userModel(req.body);
    await user.save();

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("Register Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// ============================================
// @desc    Login user and return JWT token
// @route   POST /api/v1/auth/login
// ============================================
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in login API",
      error,
    });
  }
};

// ============================================
// @desc    Get current logged in user
// @route   GET /api/v1/auth/current-user
// @access  Private
// ============================================
const currentUserController = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized - missing user info",
      });
    }

    const user = await userModel.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log("Current User Error:", error);
    return res.status(500).send({
      success: false,
      message: "Unable to get current user",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
};
