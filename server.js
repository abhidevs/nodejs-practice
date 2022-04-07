const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/") {
    return fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      console.log("data: ", data);
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write("<body>");
      res.write(`<h1>${data}</h1>`);
      res.write(
        "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button>"
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello from NodeJs</title></head>");
  res.write("<body><h1>Welcome to my Node Js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000, console.log("Server running on port 4000"));
