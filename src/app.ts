import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();

// using Cors
app.use(cors());

// parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, nex: NextFunction) => {
	// creacting Interface
	interface IUser {
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
	const saveUser = async () => {
		const user = new User({
			id: "02",
			role: "student",
			name: {
				firstName: "Naimur",
				lastName: "Rahman",
			},
			gender: "male",
			email: "naimur1@gmail.com",
			password: "2345",
			contactNumber: "+2452352345",
			emergencyContactNumber: "+287452352345",
			address: "Handiyal",
		});
		await user.save();
	};
	saveUser();
	res.send("Hello World!");
});

export default app;
