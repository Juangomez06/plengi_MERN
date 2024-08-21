import mongoose from "mongoose";

const material_user_Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unidad: {
      type: String,
      required: true,
    },
    val_unitario: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    Apu_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'APU_User'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Material_user", material_user_Schema);
