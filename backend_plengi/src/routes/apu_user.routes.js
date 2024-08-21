import { Router } from "express";
import { 
    getApus,
    getApu,
    updateApu,
    deleteApu,
 } from "../controllers/apu_user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router()

//obtener todos
router.get("/apu", auth, getApus);

//obtner uno 
router.get("/apu/:id", auth, getApu);

//update
router.put("/apu/:id", auth, updateApu);

//delete
router.delete("/apu/:id", auth, deleteApu);

export default router