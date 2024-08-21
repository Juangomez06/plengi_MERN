import { Router } from "express";
import { 
    getLabours_BD,
    getLabour_BD,
    createLabour_BD
 } from "../controllers/labour_BD.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router()

//obtener todos
router.get("/labour", auth, getLabours_BD);

//create
router.post("/labour", auth, createLabour_BD);

//obtner uno 
router.get("/labour/:id", auth, getLabour_BD);

export default router