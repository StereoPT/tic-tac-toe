import express, { Express, Request, Response } from "express";
import cors from "cors";
import http from "http";
import socketio from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(
  cors({
    origin: "*",
  })
);
const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: "*",
  },
});
io.listen(4200);
const port = process.env.PORT || 1337;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

io.on("connection", (socket) => {
  console.log("User Connected");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
