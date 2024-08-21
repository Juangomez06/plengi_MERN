import APU_User from '../models/apu_user.model.js';

// Obtener todos los APUs del usuario
export const getApus = async (req, res) => {
  try {
    const apus = await APU_User.find({ user: req.user.id })
    res.json(apus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un APU específico del usuario
export const getApu = async (req, res) => {
  try {
    const apu = await APU_User.findById(req.params.id)
    if (!apu) return res.status(404).json({ message: 'APU not found' });
    return res.json(apu);
  } catch (error) {
    res.status(404).json({ message: "Apu not found" });
  }
};

// Actualizar un APU específico del usuario
export const updateApu = async (req, res) => {
  try {
    
    const { materiales_id, labours_id, equipos_id } = req.body;
    
    console.log(materiales_id);
    const updatedApu = await APU_User.findOneAndUpdate(
      { _id: req.params.id },
      { materiales_id, labours_id, equipos_id },
      { new: true }
    );

    return res.json(updatedApu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un APU específico del usuario
export const deleteApu = async (req, res) => {
  try {
    const deletedApu = await APU_User.findByIdAndDelete(req.params.id);

    if (!deletedApu) {
      return res.status(404).json({ message: 'APU not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
