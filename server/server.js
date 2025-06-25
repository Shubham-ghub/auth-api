const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const connectDB = require('../config/dbConfig');
const errorHandler = require('../middleware/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS BEFORE routes
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions)); // Handle preflight



// DB Config
connectDB();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req, res) => {
  res.json({
    msg: 'welcome to crypto-auth api',
  });
});

// ✅ Auth router (after CORS)
app.use("/api/auth", require('../routes/authRoutes'));

// ✅ Error handler middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
