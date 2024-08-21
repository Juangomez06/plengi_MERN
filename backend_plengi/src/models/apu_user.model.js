import mongoose from "mongoose";

const apuUserSchema = new mongoose.Schema({
  name_apu: {
    type: String,
    required: true,
  },
  actividad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity_user',
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  materiales_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Material_BD',
  }],
  labours_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Labour_BD',
  }],
  equipos_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipo_user',
  }],
});

export default mongoose.model('APU_User', apuUserSchema);

