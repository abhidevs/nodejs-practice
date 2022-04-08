const http = require("http");
const routes = require("./routes");
// const { handler, someText } = require("./routes");

// console.log(someText);

const server = http.createServer(routes);

server.listen(4000, console.log("Server running on port 4000"));
