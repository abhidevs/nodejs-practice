const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/contactus/success");
});

router.get("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
