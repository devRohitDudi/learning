import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["M", "F", "OTHER"],
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
      required: true,
    },
    medications: {
      type: String,
      required: true,
    },
    doctorAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    hospitalAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);
