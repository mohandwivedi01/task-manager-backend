import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.route.js"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));

app.use("/api/v1/task", taskRoutes);


export {app}