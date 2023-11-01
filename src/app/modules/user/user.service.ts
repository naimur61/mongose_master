import { IUser } from "./user.interface";
import User from "./user.model";

// getUser from DB
export const getUserFromDB = async (): Promise<IUser[]> => {
	const users = await User.find();
	return users;
};

// Get User from DB By Id
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload });
	return user;
};

// createUserToDB
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const user = await new User(payload);
	await user.save();
	return user;
};
