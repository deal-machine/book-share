import { Server } from "socket.io";

export const webSocket = (server) => {
  return new Server(server);
};
