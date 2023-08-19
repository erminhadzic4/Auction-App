const db = require("../database/connection");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants/config");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      "select user_id, firstname, lastname, email from users"
    );

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query(
      "insert into users(firstname,lastname,email,password) values ($1 , $2, $3, $4)",
      [firstname, lastname, email, hashedPassword]
    );

    return res.status(201).json({
      success: true,
      message: "The registration was succefull",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;

  let payload = {
    id: user.user_id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
  };

  try {
    const token = await sign(payload, SECRET);

    console.log("User info upon login:", payload);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in succefully",
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    const user = req.user;

    const userData = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    return res.status(200).json({
      info: userData,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
