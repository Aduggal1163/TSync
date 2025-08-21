import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt.js";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {type: String, select: true},
    profilePicture:{
        type: String,
        default: null,
    },
    currentWorkspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
    },
    isActive:{type: Boolean, default: true},
    lastLogin:{type: Date, default: null},
},
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function(next){
    if (this.isModified("password")) {
        if (this.password) {
          this.password = await hashValue(this.password);
        }
    }
    next();
}) 

userSchema.methods.omitPassword = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.methods.comparePassword = async function (value){
    return compareValue(value, this.password);
};

const UserModel = mongoose.model("User",userSchema)
export default UserModel;
