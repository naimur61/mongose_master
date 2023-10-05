import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/admin", getAdminUsers);
router.get("/:email", getUserById);

export default router;
