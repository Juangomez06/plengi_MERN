import Labour_BD from "../models/labour_BD.model.js";

//obtener todos
export const getLabours_BD = async (req, res) => {
  try {
    const labour = await Labour_BD.find()
    res.json(labour);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//obtner uno 
export const getLabour_BD = async (req, res) => {
    try {
      const labour = await Labour_BD.findById(req.params.id)
      if (!labour) return res.status(404).json({ message: "Labour_BD not found" });
      return res.json(labour);
    } catch (error) {
      return res.status(404).json({ message: "Labour_BD not found" });
    }
  };
  

//create
export const createLabour_BD = async (req, res) => {
  try {
    const { labour, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newlabour = new Labour_BD({
        labour,
        unidad,
        val_unitario: cantidadNumerica,
    });
    await newlabour.save();
    res.json(newlabour);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

