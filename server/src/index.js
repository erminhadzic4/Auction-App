const express = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants/config");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/user-auth");
require("./middlewares/passport-middleware");

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

app.use("/api", authRoutes);

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
