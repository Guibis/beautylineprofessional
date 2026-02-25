require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routes/user.router");
const morgan = require("morgan");
const connectDB = require("./config/DBmongo");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173"
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(morgan("common"));
app.use("/api", Router);

require("dotenv").config();
connectDB();

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("Server running in port ", PORT)
  })
}

module.exports = app;
