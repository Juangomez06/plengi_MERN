import Labour from "../models/labour_user.model.js";
import APU from "../models/apu_user.model.js";

//obtener todos
export const getLabours = async (req, res) => {
  try {
    const labour = await Labour.find({ user : req.user.id }).populate("user");
    res.json(labour);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create
export const createLabour = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newLabour = new Labour({
        name,
        unidad,
        val_unitario: val_unitario,
        user: req.user.id,
    });
    await newLabour.save();
    res.json(newLabour);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete
export const deleteLabour = async (req, res) => {
  try {
    const deletedLabour = await Labour.findByIdAndDelete(req.params.id);
    if (!deletedLabour)
      return res.status(404).json({ message: "Labour not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update
export const updateLabour = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const LabourUpdated = await Labour.findOneAndUpdate(
      { _id: req.params.id },
      { name, unidad, val_unitario: cantidadNumerica },
      { new: true }
    );
    return res.json(LabourUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtner uno 
export const getLabour = async (req, res) => {
  try {
    const labour = await Labour.findById(req.params.id).populate("user")
    if (!labour) return res.status(404).json({ message: "Labour not found" });
    return res.json(labour);
  } catch (error) {
    return res.status(404).json({ message: "Labour not found" });
  }
};

// Asignar mano de obra a un APU específico
export const assignManoDeObraToAPU = async (req, res) => {
  try {
    const { apuId, manoDeObraId } = req.body;

    const apu = await APU.findById(apuId);
    if (!apu) {
      return res.status(404).json({ message: "APU not found" });
    }

    const manoDeObra = await Labour.findById(manoDeObraId);
    if (!manoDeObra) {
      return res.status(404).json({ message: "Mano de obra not found" });
    }

    apu.manoDeObra.push(manoDeObra);
    await apu.save();

    res.json(apu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

