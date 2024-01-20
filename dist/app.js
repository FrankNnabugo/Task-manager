"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
dotenv.config();
const errorHandler_1 = require("./middleware/errorHandler");
const Task_Route_1 = require("./Routes/Task.Route");
const cors_1 = __importDefault(require("cors"));
const helmet = require("helmet");
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true
}));
app.use(express_1.default.json());
app.use(helmet());
app.use((0, compression_1.default)());
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
app.use(errorHandler_1.errorHandler);
app.use("/api/task", Task_Route_1.TaskRouter);
exports.default = app;
