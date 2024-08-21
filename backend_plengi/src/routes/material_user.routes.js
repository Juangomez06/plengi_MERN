import { Router } from "express";
import {
    getMaterial,
    getMaterials,
    createMaterial,
    updateMaterial,
    deleteMaterial,
} from "../controllers/material_user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMaterial_User_Schema } from "../schemas/material_user.schema.js";

const router = Router();

router.get("/material", auth, getMaterials);

router.post("/material", auth, validateSchema(createMaterial_User_Schema), createMaterial);

router.get("/material/:id", auth, getMaterial);

router.put("/material/:id", auth, updateMaterial);

router.delete("/material/:id", auth, deleteMaterial);

export default router;
