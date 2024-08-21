import { Router } from "express";
import { 
    getEquipos,
    getEquipo,
    createEquipo,
    updateEquipo,
    deleteEquipo,
 } from "../controllers/equipo_user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createEquipo_User_Schema } from "../schemas/equipo_user.schema.js";

const router = Router()

//obtener todos
router.get("/equipo", auth, getEquipos);

//create
router.post("/equipo", auth, validateSchema(createEquipo_User_Schema), createEquipo);

//obtner uno 
router.get("/equipo/:id", auth, getEquipo);

//update
router.put("/equipo/:id", auth, updateEquipo);

//delete
router.delete("/equipo/:id", auth, deleteEquipo);

export default router