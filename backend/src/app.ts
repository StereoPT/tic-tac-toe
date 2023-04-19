import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import notFound from "./middleware/notFound";
import errorHandler from "./middleware/errorHandler";
import ServerSocket from "./sockets";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const corsOptions = {
  origin: "*",
};

const app: Express = express();
app.use(cors(corsOptions));
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: corsOptions,
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.use(notFound, errorHandler);

io.on("connection", ServerSocket);

const port = process.env.PORT || 1337;
httpServer.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
