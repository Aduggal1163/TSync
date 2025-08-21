import mongoose from "mongoose";
import { generateInviteCode } from "../utils/uuid.js";

const workspaceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    inviteCode:{
        type: String,
        required: true,
        unique: true,
        default: generateInviteCode,
    },
},
    {
        timestamps: true,
    }
)

workspaceSchema.methods.resetInviteCode = function(){
    this.inviteCode = generateInviteCode(); 
}

const WorkspaceModel = mongoose.model("Workspace", workspaceSchema);
export default WorkspaceModel;
