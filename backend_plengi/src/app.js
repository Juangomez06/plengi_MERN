import express from "express"
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/tasks.routes.js"
import activity_user_Routes from "./routes/activity_user.routes.js";
import material_user_Routes from "./routes/material_user.routes.js";
import equipo_user_Routes from "./routes/equipo_user.routes.js";
import labour_user_Routes from "./routes/labour_user.routes.js";
import apu_user_Routes from "./routes/apu_user.routes.js";

import material_BD_Routes from "./routes/material_BD.route.js";
import equipo_BD_Routes from "./routes/equipo_BD.route.js";
import labour_BD_Routes from "./routes/labour_BD.route.js";

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use("/api", authRoutes)
app.use("/api", taskRoutes)

//BD
app.use("/api", equipo_BD_Routes)
app.use("/api", labour_BD_Routes)
app.use("/api", material_BD_Routes)

//user
app.use("/api/user", activity_user_Routes)
app.use("/api/user", material_user_Routes)
app.use("/api/user", equipo_user_Routes)
app.use("/api/user", labour_user_Routes)
app.use("/api/user", apu_user_Routes)



export default app