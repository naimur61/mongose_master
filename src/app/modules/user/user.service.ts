import { IUser } from "./user.interface";
import User from "./user.model";

// getUser from DB
export const getUserFromDB = async (): Promise<IUser[]> => {
	const users = await User.find();
	return users;
};

// Get User from DB By Id
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
	const user = await User.findOne({ id: payload }, { name: 1, gender: 1, contactNumber: 1 });
	return user;
};

// get admin users from database
export const getAdminUsersFromDB = async () => {
	const admins = await User.getAdminUsers();
	return admins;
};

// createUserToDB
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const user = await new User(payload);
	console.log(user.fullName());
	await user.save();
	return user;
};
