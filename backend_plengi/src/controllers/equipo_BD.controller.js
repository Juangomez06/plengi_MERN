import Equipo_BD from "../models/equipo_BD.model.js";

//obtener todos
export const getEquipos_BD = async (req, res) => {
  try {
    const equipo = await Equipo_BD.find()
    res.json(equipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//obtner uno 
export const getEquipo_BD = async (req, res) => {
    try {
      const equipo = await Equipo_BD.findById(req.params.id)
      if (!equipo) return res.status(404).json({ message: "Equipo_BD not found" });
      return res.json(equipo);
    } catch (error) {
      return res.status(404).json({ message: "Equipo_BD not found" });
    }
  };
  

//create
export const createEquipo_BD = async (req, res) => {
  try {
    const { equipo, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newEquipo = new Equipo_BD({
        equipo,
        unidad,
        val_unitario: cantidadNumerica,
    });
    await newEquipo.save();
    res.json(newEquipo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

