import mongoose from "mongoose";

const AttendanceSchema =
  new mongoose.Schema(
    {
      studentId: String,

      studentName: String,

      date: String,

      status: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models.Attendance ||
  mongoose.model(
    "Attendance",
    AttendanceSchema
  );