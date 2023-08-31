const db = require("../database/connection");

exports.createBid = async (req, res) => {
  const { bid_amount, bidder_id, product_id } = req.body;

  try {
    const bid_time = new Date();

    await db.query("BEGIN");

    const getProductQuery =
      "SELECT current_price, ending_time FROM products WHERE product_id = $1";
    const productResult = await db.query(getProductQuery, [product_id]);
    const currentPrice = productResult.rows[0].current_price;
    const auctionEndTime = new Date(productResult.rows[0].ending_time);

    if (auctionEndTime <= bid_time) {
      return res.status(400).json({
        error: "Auction has ended. You cannot place a bid.",
      });
    }

    if (bid_amount <= currentPrice) {
      return res.status(400).json({
        error: "Bid amount must be greater than the current price.",
      });
    }

    const highestBidQuery =
      "SELECT bidder_id FROM bids WHERE product_id = $1 ORDER BY bid_amount DESC, bid_time ASC LIMIT 1";
    const highestBidResult = await db.query(highestBidQuery, [product_id]);

    if (highestBidResult.rows.length > 0) {
      const highestBidderId = highestBidResult.rows[0].bidder_id;
      if (bidder_id == highestBidderId) {
        return res.status(400).json({
          error: "You cannot outbid yourself.",
        });
      }
    }

    const updateProductQuery =
      "UPDATE products SET current_price = $1 WHERE product_id = $2";
    await db.query(updateProductQuery, [bid_amount, product_id]);

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

exports.getHighestBid = async (req, res) => {
  const { product_id } = req.params;

  try {
    const getHighestBidQuery =
      "SELECT MAX(bid_amount) AS highestBid FROM bids WHERE product_id = $1";
    const highestBidResult = await db.query(getHighestBidQuery, [product_id]);

    if (highestBidResult.rows.length > 0) {
      const highestBid = highestBidResult.rows[0].highestBid;
      return res.status(200).json({
        success: true,
        highestBid: highestBid || 0,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No bids found for the product.",
      });
    }
  } catch (error) {
    console.error("Error getting highest bid:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred while fetching the highest bid.",
    });
  }
};
