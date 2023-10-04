import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>({
	role: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
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

export const User = model<IUser>("User", userSchema);
