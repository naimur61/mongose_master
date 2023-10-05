import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:email", getUserById);

export default router;
