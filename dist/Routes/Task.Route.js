"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
const express_1 = __importDefault(require("express"));
const Task_controllers_1 = require("../controllers/Task.controllers");
exports.TaskRouter = express_1.default.Router();
exports.TaskRouter.post("/createTask", Task_controllers_1.createTask);
exports.TaskRouter.get("/getAllTask", Task_controllers_1.getAllTask);
exports.TaskRouter.get("/getATask/:id", Task_controllers_1.getATask);
exports.TaskRouter.put("/updateTask/:id", Task_controllers_1.updateTask);
exports.TaskRouter.delete("/deleteATask/:id", Task_controllers_1.deleteATask);
