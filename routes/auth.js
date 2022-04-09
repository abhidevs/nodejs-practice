const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`
        <html>
            <head><title>Login to Group Chat application</title></head>
            <body>
            <h1>Login to Group Chat application</h1>
                <form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
                    <label for="username">Enter username</label>
                    <input type="text" id="username" name="username">
                    <button type="submit">Login</button>
                </form>
            </body>
        </html>
    `);
});

router.post("/login", (req, res, next) => {
  const { username } = req.body;
  console.log(`New user logged in: ${username}`);
  res.redirect("/");
});

module.exports = router;
