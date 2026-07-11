import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    parentName: {
      type: String,
      required: true,
    },

    parentMobile: {
      type: String,
      required: true,
    },

    alternateMobile: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    healthIssue: {
      type: String,
      default: "No",
    },
    
    message: {
      type: String,
      default: "",
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);