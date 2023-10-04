import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Databases connection
async function bootstrap() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test");
	try {
		console.log("Database connection Done!");

		// Listing databases
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log("Fail to connect database.", error);
	}
}

bootstrap();
