import { Router } from "express";
import { postGame,getGames } from "../controllers/gamecontroller.js";

const gameRouter = Router();

gameRouter.post("/games", postGame);
gameRouter.get("/games",getGames)

export default gameRouter;