import { Server, Socket } from "socket.io";
import prisma from "./config/db.config.js";
import { produceMessage } from "./helper.kafka.js";

interface CustomSocket extends Socket {
  room?: string;
}

export function setupSocket(io: Server) {
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;
    if (!room) {
      return next(new Error("Invalid room"));
    }

    socket.room = room;
    next();
  });

  io.on("connection", (socket: CustomSocket) => {
    //Join the room
    socket.join(socket.room);

    socket.on("message", async (data) => {
      console.log("The socket message is- ", data);
      // socket.broadcast.emit("message", data);
      await produceMessage(process.env.KAFKA_TOPIC, data);

      socket.to(socket.room).emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected- ", socket.id);
    });
  });
}
