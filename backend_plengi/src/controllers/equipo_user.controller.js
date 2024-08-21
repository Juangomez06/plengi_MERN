import Equipo from "../models/equipo_user.model.js";
import APU from "../models/apu_user.model.js";

//obtener todos
export const getEquipos = async (req, res) => {
  try {
    const equipo = await Equipo.find({ user : req.user.id }).populate("user");
    res.json(equipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create
export const createEquipo = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newEquipo = new Equipo({
        name,
        unidad,
        val_unitario: cantidadNumerica,
        user: req.user.id, 
    });
    const saveEquipo = await newEquipo.save();

    //enviamos solo el id del equipo creado 

    const newAPU = new APU({
      equipo: saveEquipo._id
    })

    await newAPU.save()

    res.json(newEquipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete
export const deleteEquipo = async (req, res) => {
  try {
    const deletedEquipo = await Equipo.findByIdAndDelete(req.params.id);
    if (!deletedEquipo)
      return res.status(404).json({ message: "Equipo not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update
export const updateEquipo = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const EquipoUpdated = await Equipo.findOneAndUpdate(
      { _id: req.params.id },
      { name, unidad, val_unitario: val_unitario },
      { new: true }
    );
    return res.json(EquipoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtner uno 
export const getEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findById(req.params.id).populate("user")
    if (!equipo) return res.status(404).json({ message: "Equipo not found" });
    return res.json(equipo);
  } catch (error) {
    return res.status(404).json({ message: "Equipo not found" });
  }
};

// Asignar equipo a un APU específico
export const assignEquipoToAPU = async (req, res) => {
  try {
    const { apuId, equipoId } = req.body;

    const apu = await APU.findById(apuId);
    if (!apu) {
      return res.status(404).json({ message: "APU not found" });
    }

    const equipo = await Equipo.findById(equipoId);
    if (!equipo) {
      return res.status(404).json({ message: "Equipo not found" });
    }

    apu.equipo.push(equipo);
    await apu.save();

    res.json(apu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
