import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello World!");

	interface IUser {
		role: string;
		password: string;
		email: string;
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

	const userSchema = new Schema<IUser>({
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

	const User = model<IUser>("User", userSchema);

	const createUserToDB = async () => {
		const user = new User({
			role: "admin5",
			password: "<PASSWORD>",
			email: "admin@exampl5.com",
			name: {
				firstName: "John",
				middleName: "",
				lastName: "Doe",
			},
			gender: "male",
			contactNumber: "0700000000",
			emergencyContactNumber: "0700000000",
			permanentAddress: "123 Main Street",
			presentAddress: "123 Main Street",
		});

		await user.save();
	};

	createUserToDB();

	next();
});

export default app;
