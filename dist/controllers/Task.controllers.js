"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteATask = exports.getATask = exports.getAllTask = exports.createTask = void 0;
const Task_model_1 = require("../model/Task.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Schema_validation_1 = require("../Utils/Schema.validation");
exports.createTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignTo: req.body.assignTo
    };
    const { error, value } = Schema_validation_1.schemaValidation.validate(data);
    if (error) {
        res.send(error.message);
    }
    else {
        const newTask = yield Task_model_1.Task.create(data);
        res.status(200).send(newTask);
    }
}));
exports.getAllTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page || 0;
    const perPage = 5;
    const getAllTask = yield Task_model_1.Task.find({})
        .sort({ createdAt: -1 })
        .skip(page * perPage)
        .limit(perPage);
    res.send(getAllTask);
}));
exports.getATask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const get = yield Task_model_1.Task.findOne({ _id: id });
    res.send(get);
}));
exports.deleteATask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteTask = yield Task_model_1.Task.deleteOne({ _id: id });
    res.send("Task deleted");
}));
exports.updateTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const update = yield Task_model_1.Task.updateOne({ _id: id }, req.body);
    res.send(update);
}));
