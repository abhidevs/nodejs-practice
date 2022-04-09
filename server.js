const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000, console.log("Server running on port 4000"));
