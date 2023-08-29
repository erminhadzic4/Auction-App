const db = require("../database/connection");

exports.createBid = async (req, res) => {
  const { bid_amount, bidder_id, product_id } = req.body;

  try {
    const bid_time = new Date();

    await db.query("BEGIN");

    const getProductQuery =
      "SELECT current_price FROM products WHERE product_id = $1";
    const productResult = await db.query(getProductQuery, [product_id]);
    const currentPrice = productResult.rows[0].current_price;

    if (bid_amount > currentPrice) {
      const updateProductQuery =
        "UPDATE products SET current_price = $1 WHERE product_id = $2";
      await db.query(updateProductQuery, [bid_amount, product_id]);
    }

    const insertBidQuery =
      "INSERT INTO bids (bid_amount, bid_time, bidder_id, product_id) VALUES ($1, $2, $3, $4)";
    await db.query(insertBidQuery, [
      bid_amount,
      bid_time,
      bidder_id,
      product_id,
    ]);

    await db.query("COMMIT");

    return res.status(201).json({
      success: true,
      message: "Bid created successfully",
    });
  } catch (error) {
    await db.query("ROLLBACK");
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
