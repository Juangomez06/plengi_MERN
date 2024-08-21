import mongoose from "mongoose";

const material_BD_Schema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Material_BD", material_BD_Schema);
