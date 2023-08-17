const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logout,
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
const {
  createCategory,
  deleteCategory,
  getCategories,
} = require("../controllers/category-controller");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controller");
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

// Product routes
router.post("/products", createProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
