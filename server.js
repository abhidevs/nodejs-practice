const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Abhik Das");
});

server.listen(4000, console.log('Server running on port 4000'));
