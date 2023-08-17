const { Router } = require("express");
const {
  getUsers,
  getCategories,
  register,
  login,
  protected,
  logout,
  createCategory,
  deleteCategory,
} = require("../controllers/auth-controller");
const { updateUser, deleteUser } = require("../controllers/user-controller");
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

// User routes
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users", getUsers);

// Auth routes
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/protected", userAuth, protected);
router.get("/logout", logout);

// Categories routes
router.get("/categories", getCategories);
router.post(
  "/category",
  categoryValidation,
  validationMiddleware,
  createCategory
);
router.delete("/category", deleteCategory);

module.exports = router;
