const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectTODatabase } = require("./db/connect");
const router = require("./routes/router");

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json()); // Middleware to parse JSON request bodies

const PORT = process.env.PORT || 9000;

// Use the routes defined in the router file
app.use("/api", router); // Prefix all routes with /api

app.get("/", (req, res) => {
  res.send("Welcome to the API!"); // A simple welcome message
});

// Connect to the database and start the server
connectTODatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started successfully at port ${PORT}...😎😎😎`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error); // Added error handling
    process.exit(1); // Exit the process if the database connection fails
  });
