import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    products: [
        {
            id: {
                type: [Schema.Types.ObjectId],
                ref: "product",
            },
            qty: number
        },
    ],
    totalAmount: number
});

export default mongoose.model("order", orderSchema);