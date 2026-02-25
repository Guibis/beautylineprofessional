require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routes/user.router");
const morgan = require("morgan");
const connectDB = require("./config/DBmongo");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  process.env.FRONTEND_URL?.replace(/\/$/, ""), // Remove trailing slash if present
  "http://localhost:5173",
  "http://127.0.0.1:5173"
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const isAllowed = allowedOrigins.includes(origin) || 
                     !process.env.NODE_ENV || 
                     process.env.NODE_ENV === 'development';

    if (isAllowed) {
      callback(null, true);
    } else {
      console.error(`CORS blocked for origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(morgan("common"));
app.use("/api", Router);

// Connect to Database
connectDB();

if (require.main === module) {
  app.listen(PORT, () => {
    console.log("Server running in port ", PORT)
  })
}

module.exports = app;
