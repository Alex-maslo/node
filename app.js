import * as http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const users = [
  { id: 1, name: "Олександр" },
  { id: 2, name: "Марія" },
  { id: 3, name: "Іван" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
