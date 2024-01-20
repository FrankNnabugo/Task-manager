"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app_js_1.default);
server.listen(process.env.PORT, () => {
    console.log("server is running on port", PORT);
});
//Dbconnect();
