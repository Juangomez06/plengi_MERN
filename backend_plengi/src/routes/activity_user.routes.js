import { Router } from "express";
import { 
    createActivity,
    getActivitys,
    getActivity,
    deleteActivity,
    updateActivity
 } from "../controllers/activity_user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createActivitySchema } from "../schemas/activity_user.schema.js";

const router = Router()

//obtener todos
router.get("/activity", auth, getActivitys);

//create
router.post("/activity", auth, validateSchema(createActivitySchema), createActivity);

//obtner uno 
router.get("/activity/:id", auth, getActivity);

//update
router.put("/activity/:id", auth, updateActivity);

//delete
router.delete("/activity/:id", auth, deleteActivity);

export default router