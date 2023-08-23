const db = require("../database/connection");

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email } = req.body;

  try {
    await db.query(
      "update users set firstname = $1, lastname = $2, email = $3 where user_id = $4",
      [firstname, lastname, email, id]
    );

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("delete from users where user_id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
