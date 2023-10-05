import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByEmailFromDB, getUserFromDB } from "./user.service";
import { IUser } from "./user.interface";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
	const data: IUser = req.body;
	const user = await createUserToDB(data);
	res.status(200).send({
		status: "success",
		data: user,
	});
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	const user = await getUserFromDB();
	res.status(200).send({
		status: "success",
		data: user,
	});
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
	const email: string = req.params.email;
	const user = await getUserByEmailFromDB(email);
	res.status(200).send({
		status: "success",
		data: user,
	});
};
