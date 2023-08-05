import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    products: [
        {
            id: {
                type: [Schema.Types.ObjectId],
                ref: "product",
            },
            qty: Number
        },
    ],
});

export default mongoose.model("order", cartModel);