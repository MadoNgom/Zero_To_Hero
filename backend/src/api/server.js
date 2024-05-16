const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./database"); // Import the database configuration

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// Define routes here
app.use("/api/cours", require("./routes/cours"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
