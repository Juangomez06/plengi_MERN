import { Router } from "express";
import { 
    getLabours,
    getLabour,
    createLabour,
    updateLabour,
    deleteLabour,
 } from "../controllers/labour_user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createLabour_User_Schema } from "../schemas/labour_user.schema.js";

const router = Router()

//obtener todos
router.get("/labour", auth, getLabours);

//create
router.post("/labour", auth, validateSchema(createLabour_User_Schema), createLabour);

//obtner uno 
router.get("/labour/:id", auth, getLabour);

//update
router.put("/labour/:id", auth, updateLabour);

//delete
router.delete("/labour/:id", auth, deleteLabour);

export default router