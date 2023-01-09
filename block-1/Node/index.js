const http = require("http");

const port = 4000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end("Hello, world\n");
});

console.log("hi");

console.log("hi");

server.listen(port, () => {
  console.log(`Server listening on port http:localhost:${port}/`);
});
