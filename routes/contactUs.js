const path = require("path");

const express = require("express");

const contactUsController = require("../controllers/contactUs");

const router = express.Router();

router.get("/", contactUsController.getContactUs);

router.post("/", contactUsController.postContactUs);

router.get("/success", contactUsController.getContactUsSuccess);

module.exports = router;
