"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const client_1 = require("@repo/db/client");
const server = new ws_1.WebSocketServer({
    port: 3001
});
server.on("connection", async (socket) => {
    const res = await client_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    console.log(res);
    socket.send("Hi there you are connected to the server");
});
