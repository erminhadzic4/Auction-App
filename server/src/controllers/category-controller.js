const db = require("../database/connection");

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    await db.query("insert into categories (name) values ($1)", [name]);

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  const { name } = req.body;

  try {
    await db.query("DELETE FROM categories WHERE name = $1", [name]);

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const { rows } = await db.query("select name from categories");

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};
