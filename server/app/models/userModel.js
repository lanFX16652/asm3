import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    orders: {
        type: [Schema.Types.ObjectId],
        ref: 'order'
    }
});

export default mongoose.model("user", userSchema);