import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

// Get All User
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	const users = await getUserFromDB();

	res.status(200).json({
		status: "success",
		data: users,
	});
};

// Get user By Id
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id;
	res.status(200).json({
		status: "success",
		data: id,
	});
};

// Create new User
export const createUser = async (req: Request, res: Response, nex: NextFunction) => {
	const newUser = req.body;
	const user = await createUserToDB(newUser);

	res.status(200).json({
		status: "success",
		data: user,
	});
};
