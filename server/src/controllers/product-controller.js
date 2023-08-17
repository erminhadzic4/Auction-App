const db = require("../database/connection");

exports.createProduct = async (req, res) => {
  const {
    name,
    description,
    starting_price,
    current_price,
    ending_time,
    seller_id,
    category_id,
    image,
  } = req.body;

  try {
    await db.query(
      "INSERT INTO products (name, description, starting_price, current_price, ending_time, seller_id, category_id, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        name,
        description,
        starting_price,
        current_price,
        ending_time,
        seller_id,
        category_id,
        image,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id]
    );

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    const product = rows[0];
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM products");

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        error: "There are no products",
      });
    }

    const product = rows;
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    starting_price,
    current_price,
    ending_time,
    seller_id,
    category_id,
    image,
  } = req.body;

  try {
    await db.query(
      "UPDATE products SET name = $1, description = $2, starting_price = $3, current_price = $4, ending_time = $5, seller_id = $6, category_id = $7, image = $8 WHERE product_id = $9",
      [
        name,
        description,
        starting_price,
        current_price,
        ending_time,
        seller_id,
        category_id,
        image,
        id,
      ]
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM products WHERE product_id = $1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
