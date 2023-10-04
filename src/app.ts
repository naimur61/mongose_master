import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Route
import useRoutes from "./app/modules/user/user.route";

// Using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", useRoutes);

export default app;

/*
<-----------------------------Break down------------------------------>

interface => user.interface.ts
Schema => user.model.ts

Route
route function => controller.ts
Database Query Function => service

*/
