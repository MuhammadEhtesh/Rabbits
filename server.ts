const http = require("http");
const backendApp = require("./backend/app");
const port = 3000;

const server = http.createServer(backendApp);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
