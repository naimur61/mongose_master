import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static("getAdminUsers", async function getAdminUsers() {
	const admins = await this.find({ role: "admin" });
	return admins;
});

userSchema.method("fullName", function fullName() {
	return this.name.firstName + " " + this.name.lastName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
