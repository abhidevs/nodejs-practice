const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");
const contactUsRoute = require("./routes/contactUs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminRoute);
app.use("/contactus", contactUsRoute);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000, () => console.log("Server running at port 4000"));
