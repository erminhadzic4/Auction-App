const { Router } = require("express");
const {
  getUsers,
  getUserInfo,
  register,
  login,
  protected,
  logout,
} = require("../controllers/user-auth-controller");
const { registerValidation, loginValidation } = require("../validators/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");

const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();

router.get("/get-users", getUsers);
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/protected", userAuth, protected);
router.get("/logout", logout);

module.exports = router;
