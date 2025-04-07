import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      type: [orderItemsSchema],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
