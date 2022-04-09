const fs = require("fs");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("messages.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) console.log(err);

    const messages = data.split(",");
    let chatData = "";
    messages.forEach((message) => {
      chatData += `<h4> ${message} </h4>`;
    });
    res.send(`
            <html>
                <head><title>Group Chat application</title></head>
                <body>
                    <h1>Chat with unknown people</h1>
                    <form onSubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/send-message" method="POST">
                        <input type="hidden" id="username" name="username">
                        <label for="message">Enter message</label>
                        <input type="text" id="message" name="message">
                        <button type="submit">Send</button>
                    </form>

                    <h1>All messages</h1>
                    ${chatData}
                </body>
            </html>
        `);
  });
});

router.post("/send-message", (req, res, next) => {
  console.log(req.body);
  const { username, message } = req.body;

  fs.appendFile("messages.txt", `${username}: ${message},`, function (err) {
    if (err) console.log(err);
    else res.redirect("/");
  });
});

module.exports = router;
