import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const useSchema = new Schema<IUser>({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	role: {
		type: String,
		enum: ["student", "teacher", "admin"],
		required: true,
	},
	name: {
		firstName: {
			type: String,
			required: true,
		},
		middleName: {
			type: String,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	gender: {
		type: String,
		enum: ["male", "female"],
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	contactNumber: {
		type: String,
		required: true,
	},
	emergencyContactNumber: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
});

const User = model<IUser>("User", useSchema);

export default User;
