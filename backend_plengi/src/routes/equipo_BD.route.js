import { Router } from "express";
import { 
    getEquipos_BD,
    getEquipo_BD,
    createEquipo_BD
 } from "../controllers/equipo_BD.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router()

//obtener todos
router.get("/equipo", auth, getEquipos_BD);

//create
router.post("/equipo", auth, createEquipo_BD);

//obtner uno 
router.get("/equipo/:id", auth, getEquipo_BD);

export default router