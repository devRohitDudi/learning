import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatmentPlan: {
      type: String,
      required: true,
    },
    medicationsPrescribed: {
      type: String,
      required: true,
    },
    followUpDate: {
      type: Date,
      required: true,
    },
  },
  { timeatamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
