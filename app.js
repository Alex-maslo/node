const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Hello, World!\n");
      break;
    case "/users":
      res.statusCode = 200;
      res.end("Users list here\n");
      break;
    case "/about":
      res.statusCode = 200;
      res.end("About us page\n");
      break;
    default:
      res.statusCode = 404;
      res.end("Page not found\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
