import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

async function bootstrap() {
	try {
		// Data Base Connection
		await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
		console.log("Data Base Connection successfully!");

		// Listing Port
		app.listen(port, () => {
			console.log(`Mongoose Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
}

bootstrap();
