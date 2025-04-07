import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    hospitalAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoosew.model("Doctor", doctorSchema);
