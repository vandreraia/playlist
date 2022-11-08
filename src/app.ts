import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRouter from "./routers/gameRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(gameRouter);

app.get('/status', (req, res) => res.status(200).send('ok'));

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ` + process.env.PORT);
});