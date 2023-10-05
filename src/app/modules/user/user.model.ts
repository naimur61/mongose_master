import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
	role: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	userId: { type: String, required: true, unique: true },
	name: {
		firstName: { type: String, required: true },
		middleName: { type: String },
		lastName: { type: String, required: true },
	},
	gender: { type: String, required: true, enum: ["male", "female"] },
	contactNumber: { type: String, required: true },
	emergencyContactNumber: { type: String },
	permanentAddress: { type: String, required: true },
	presentAddress: { type: String },
});

userSchema.method("fullName", function fullName() {
	return this.name.firstName + " " + this.name.lastName;
});

userSchema.static("getAdminUsers", function getAdminUsers() {
	return this.find({ role: "admin" });
});

export const User = model<IUser, UserModel>("User", userSchema);
