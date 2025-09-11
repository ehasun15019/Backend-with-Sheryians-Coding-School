const http = require("http");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.end("hello world");
});

server.listen(PORT, () => {});
