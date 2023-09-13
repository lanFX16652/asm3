import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;


const RoomSchema = new Schema({
    userCreate: {
        type: Types.ObjectId,
        ref: 'user',
        required: true
    },
    messages: {
        type: [{
            userId: Types.ObjectId,
            content: String,
        }],
        default: []
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model("room", RoomSchema);