const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./database"); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());


sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    sequelize
      .sync()
      .then(() => {
        console.log("Database synchronized");
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
app.use("/api/cours", require("./routes/cours"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
