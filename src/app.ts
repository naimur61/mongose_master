import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// using Cors
app.use(cors());

app.get("/", (req: Request, res: Response, nex: NextFunction) => {
	res.send("Hello World!");
});

export default app;
