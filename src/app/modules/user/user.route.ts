import express from "express";
import { createUserToDB } from "./user.service";
import { createUser } from "./user.controller";
const router = express.Router();

router.get("/", createUser);

export default router;
