import express from "express";
import { createUserToDB } from "./user.service";
import { createUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/Create-user", createUser);

export default router;
