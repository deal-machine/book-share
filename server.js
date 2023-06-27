import http from "http";
import app from "./src/app.js";
import { webSocket } from "./websocket.js";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Express server running on port ${port}`)
);

const io = webSocket(server);

io.on("connection", (socket) => {
  console.log("socket");
});
