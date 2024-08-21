import Activity from "../models/activity_user.model.js";
import APU from "../models/apu_user.model.js";

//obtener todos
export const getActivitys = async (req, res) => {
  try {
    const activity = await Activity.find({ user : req.user.id }).populate("user");
    res.json(activity);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//create
export const createActivity = async (req, res) => {
  try {
    const { actividad, unidad, cantidad } = req.body;
    const cantidadNumerica = parseFloat(cantidad);
    
    const newActivity = new Activity({
      actividad,
      unidad,
      cantidad: cantidadNumerica,
      user: req.user.id,
    });

    const saveActivity = await newActivity.save();

    //creamos el registor para el APU

    const newAPU = new APU({
      actividad: saveActivity._id,
      name_apu:saveActivity.actividad,
      user: req.user.id,
      
    })

    await newAPU.save()

    res.json(saveActivity);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//delete
export const deleteActivity = async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    if (!deletedActivity)
      return res.status(404).json({ message: "Activity not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//update
export const updateActivity = async (req, res) => {
  try {
    const { actividad, unidad, cantidad } = req.body;
    const cantidadNumerica = parseFloat(cantidad);
    
    const activityUpdated = await Activity.findOneAndUpdate(
      { _id: req.params.id },
      { actividad, unidad, cantidad : cantidadNumerica },
      { new: true }
    );

    //actualizamos solo el nombre del APU

    const updateAPU = await APU.findOneAndUpdate(
      { user: req.user.id },
      { name_apu: actividad },
      { new: true }
    );

    res.json(activityUpdated)

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//obtner uno 
export const getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id).populate("user")
    if (!activity) return res.status(404).json({ message: "Activity not found" });
    return res.json(activity);
  } catch (error) {
    return res.status(404).json({ message: "Activity not found" });
  }
};
