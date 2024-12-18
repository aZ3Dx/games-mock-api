const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  readOnly: true,
});

server.use(middlewares);
server.use("/api/v1", router);
server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});
