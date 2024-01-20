"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true
    },
    assignTo: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
