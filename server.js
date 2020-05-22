const http = require("http");
const config = require("./backend/config/config");
const app = require("./backend/app");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
