const { check } = require("express-validator");
const db = require("../database/connection");
const { compare } = require("bcryptjs");

const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be between 6 and 15 characters.");

const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email.");

const firstname = check("firstname")
  .isLength({ min: 1 })
  .withMessage("Firstname must have at least 1 character.");

const lastname = check("lastname")
  .isLength({ min: 1 })
  .withMessage("Lastname must have at least 1 character.");

const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * from users WHERE email = $1", [
    value,
  ]);

  if (rows.length) {
    throw new Error("User is already registered with that email.");
  }
});

const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * from users WHERE email = $1", [value]);

  if (!user.rows.length) {
    throw new Error("Email does not exist.");
  }

  const validPassword = await compare(req.body.password, user.rows[0].password);

  if (!validPassword) {
    throw new Error("Wrong password.");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [firstname, lastname, email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
