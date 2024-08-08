import dotenv from "dotenv";
import express, { type Request, type Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (_req: Request, res: Response) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
