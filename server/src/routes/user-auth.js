const { Router } = require("express");
const {
  getUsers,
  getCategories,
  register,
  login,
  protected,
  logout,
  createCategory,
} = require("../controllers/user-auth-controller");
const {
  registerValidation,
  loginValidation,
  categoryValidation,
} = require("../validators/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");

const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();

router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.post(
  "/category",
  categoryValidation,
  validationMiddleware,
  createCategory
);

router.get("/protected", userAuth, protected);
router.get("/logout", logout);
router.get("/users", getUsers);
router.get("/categories", getCategories);

module.exports = router;
