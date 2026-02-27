require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routes/user.router");
const morgan = require("morgan");
const connectDB = require("./config/DBmongo");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  process.env.FRONTEND_URL?.replace(/\/$/, "")
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(morgan("common"));
app.use("/api", Router);

// Connect to Database and then start listening
const startServer = async () => {
  try {
    await connectDB();
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log("✅ Backend Server running on port:", PORT);
      });
    }
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();

module.exports = app;
