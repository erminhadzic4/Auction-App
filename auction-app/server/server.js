const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./database/connection");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
    await sequelize.sync();
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

app.use("/api", authRoutes);
