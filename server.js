const express = require("express");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");
const chatRoute = require("./routes/chat");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoute);
app.use(chatRoute);

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000, () => console.log("Server running at port 4000"));
