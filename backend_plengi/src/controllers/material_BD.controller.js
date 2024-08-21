import Material_BD from "../models/material_BD.model.js";

//obtener todos
export const getMaterials_BD = async (req, res) => {
  try {
    const material = await Material_BD.find()
    res.json(material);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//obtner uno 
export const getMaterial_BD = async (req, res) => {
    try {
      const material = await Material_BD.findById(req.params.id)
      if (!material) return res.status(404).json({ message: "Material_BD not found" });
      return res.json(material);
    } catch (error) {
      return res.status(404).json({ message: "Material_BD not found" });
    }
  };
  

//create
export const createMaterial_BD = async (req, res) => {
  try {
    const { material, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newMaterial = new Material_BD({
        material,
        unidad,
        val_unitario: cantidadNumerica,
    });
    await newMaterial.save();
    res.json(newMaterial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

