import { Router } from "express";
import { 
    getMaterials_BD,
    getMaterial_BD,
    createMaterial_BD
 } from "../controllers/material_BD.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router()

//obtener todos
router.get("/material", auth, getMaterials_BD);

//create
router.post("/material", auth, createMaterial_BD);

//obtner uno 
router.get("/material/:id", auth, getMaterial_BD);

export default router