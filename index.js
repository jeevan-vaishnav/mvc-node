const express = require("express");
const app = express();

//methods
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products", (req, res) => {
  res.send("Product page");
});


const port = 3000;

app.listen(port,() => {
  console.log(`App is running on port http://localhost:${port}`);
});
