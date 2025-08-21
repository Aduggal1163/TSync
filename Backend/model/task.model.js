import mongoose from "mongoose";
import { TaskPriorityEnum, TaskStatusEnum } from "../enums/task.enums.js";
import { generateTaskCode } from "../utils/uuid.js";

const taskSchema = new mongoose.Schema({
    taskCode:{
        type: String,
        unique: true,
        default: generateTaskCode,
    },
    title:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        default: null,
        trim: true,
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    workspace:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true,
    },
    status:{
        type: String,
        enum: Object.values(TaskStatusEnum),
        default: TaskStatusEnum.TODO,
    },
    priority:{
        type: String,
        enum: Object.values(TaskPriorityEnum),
        default: TaskPriorityEnum.MEDIUM,
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dueDate:{
        type: Date,
        default: null,
    },
},
    {
        timestamps: true,
    }
);

const TaskModel = mongoose.model("Task",taskSchema);
export default TaskModel;
