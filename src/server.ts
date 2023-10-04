import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
const port = 7000;
app.use(cors());

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

app.get("/", (req, res) => {
	res.send("Hello World!");
});
