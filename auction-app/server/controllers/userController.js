const bcrypt = require("bcrypt");
const User = require("../models/user");
const authService = require("../services/authService");

async function register(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    console.log("Received registration request:", req.body);

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "User already registered with that email!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    console.log("User registered successfully:", user.toJSON());
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ error: "Registration failed" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("Login failed: Invalid email");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Login failed: Invalid password");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = authService.generateToken(user.id);
    res.cookie("token", token, { httpOnly: true });

    console.log("Login successful");
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ error: "Login failed" });
  }
}

module.exports = {
  register,
  login,
};
