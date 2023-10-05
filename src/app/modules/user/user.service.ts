import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const user = await new User(payload);
	await user.save();
	console.log(user.fullName());
	return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
	const user = await User.find();
	return user;
};

export const getUserByEmailFromDB = async (payload: string): Promise<IUser | null> => {
	const user = await User.findOne({ email: payload }, { name: 1, contactNumber: 1 });
	return user;
};

export const getAdminUsersFromDB = async () => {
	const admins = await User.getAdminUsers();
	return admins;
};
