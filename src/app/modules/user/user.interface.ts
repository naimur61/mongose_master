import { HydratedDocument, Model } from "mongoose";

export interface IUser {
	role: string;
	password: string;
	email: string;
	userId: string;
	name: {
		firstName: string;
		middleName?: string;
		lastName: string;
	};
	gender: "male" | "female";
	contactNumber: string;
	emergencyContactNumber?: string;
	permanentAddress: string;
	presentAddress?: string;
}

// instance Method
export interface IUserMethods {
	fullName(): string;
}

// Statics Methods
export interface UserModel extends Model<IUser, {}, IUserMethods> {
	getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
