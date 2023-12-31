import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersFromDB, getUserByIdFromDB, getUserFromDB } from "./user.service";

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

	const user = await getUserByIdFromDB(id);
	res.status(200).json({
		status: "success",
		data: user,
	});
};

// // Get Admin Users From DB
export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
	const admins = await getAdminUsersFromDB();
	res.status(200).json({
		status: "success",
		data: admins,
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
