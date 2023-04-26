"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const notFound_1 = __importDefault(require("./middleware/notFound"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const sockets_1 = __importDefault(require("./sockets"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const corsOptions = {
    origin: "*",
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: corsOptions,
});
app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});
app.use(notFound_1.default, errorHandler_1.default);
io.on("connection", sockets_1.default);
const port = process.env.PORT || 1337;
httpServer.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map