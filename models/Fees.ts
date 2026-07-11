import mongoose from "mongoose";

const FeesSchema =
  new mongoose.Schema(
    {
      studentId: String,

      studentName: String,

      month: String,

      amount: String,

      status: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models.Fees ||
  mongoose.model(
    "Fees",
    FeesSchema
  );