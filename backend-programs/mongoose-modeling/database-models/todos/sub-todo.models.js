import mongoose from "mongoose";

const sub_todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    todoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
      required: true,
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", sub_todoSchema);
