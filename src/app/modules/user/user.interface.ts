import { HydratedDocument, Model } from "mongoose";

export interface IUser {
	id: string;
	role: "student" | "teacher" | "admin";
	name: {
		firstName: string;
		middleName?: string;
		lastName: string;
	};
	gender: "male" | "female";
	email: string;
	password: string;
	contactNumber: string;
	emergencyContactNumber: string;
	address: string;
}

export interface IUserMethods {
	fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
	getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
