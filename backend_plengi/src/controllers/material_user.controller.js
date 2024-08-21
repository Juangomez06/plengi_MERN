import Material from "../models/material_user.model.js";
import APU from "../models/apu_user.model.js";

//obtener todos
export const getMaterials = async (req, res) => {
  try {
    const material = await Material.find({ user : req.user.id }).populate("user");
    res.json(material);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create
export const createMaterial = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const newMaterial = new Material({
        name,
        unidad,
        val_unitario: cantidadNumerica,
        user: req.user.id,
    });
    await newMaterial.save();
    res.json(newMaterial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete
export const deleteMaterial = async (req, res) => {
  try {
    const deletedMaterial = await Material.findByIdAndDelete(req.params.id);
    if (!deletedMaterial)
      return res.status(404).json({ message: "Material not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update
export const updateMaterial = async (req, res) => {
  try {
    const { name, unidad, val_unitario } = req.body;
    const cantidadNumerica = parseFloat(val_unitario);
    const materialUpdated = await Material.findOneAndUpdate(
      { _id: req.params.id },
      { name, unidad, val_unitario: cantidadNumerica },
      { new: true }
    );
    return res.json(materialUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtner uno 
export const getMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id).populate("user")
    if (!material) return res.status(404).json({ message: "Material not found" });
    return res.json(material);
  } catch (error) {
    return res.status(404).json({ message: "Material not found" });
  }
};

// //asignacion de materiales a APU

export const assignMaterialToAPU = async (req, res) => {
  try {
    const { apuId, materialId } = req.body;

    const apu = await APU.findById(apuId);
    if (!apu) {
      return res.status(404).json({ message: "APU not found" });
    }

    const material = await Material.findById(materialId);
    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    // // Verificar si el material ya está presente en la lista apu.material
    // const isMaterialAssigned = apu.material.some((assignedMaterial) => assignedMaterial.equals(material._id));
    // if (isMaterialAssigned) {
    //   return res.status(400).json({ message: "Material already assigned to APU" });
    // }

    apu.material.push(material);
    await apu.save();

    res.json(apu);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};