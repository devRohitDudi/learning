import mongoose, { Mongoose } from "mongoose";

const userSchema = new Mongoose.userSchema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      isActive: Boolean,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passsword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
