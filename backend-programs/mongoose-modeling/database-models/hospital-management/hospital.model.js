import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  pincode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export const Hospital = mongoose.model("Hospital", hospitalSchema);
