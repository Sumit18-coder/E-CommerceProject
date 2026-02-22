import mongoose from "mongoose";

const returnSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    item: {
      name: String,
      image: String,
      price: Number,
      qty: Number,
      selectedSize: String,
    },
    reason: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Requested", "Approved", "Rejected", "Refunded"],
      default: "Requested",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Return", returnSchema);
