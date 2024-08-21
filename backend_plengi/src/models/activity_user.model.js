import mongoose from "mongoose";

const activity_user_Schema = new mongoose.Schema(
  {
    actividad: {
      type: String,
      required: true,
    },
    unidad: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    Apu_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Apu_user'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Activity_user", activity_user_Schema);
