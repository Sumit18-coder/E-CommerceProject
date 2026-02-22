import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    {
        user: {
            id: String,
            name: String,
            email: String,
        },
        items: [
            {
                productId: String,
                name: String,
                price: Number,
                qty: Number,
                image: String,
                size: String,
            }
        ],
        total: Number,
        paymentMethod: {
            type: String,
            default: "COD",
        },
        status: {
            type: String,
            default: "PLACED"
        },
    },
    {timestamps: true}
)

export default mongoose.model("Order", orderSchema)