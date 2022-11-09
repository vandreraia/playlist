import { Router } from "express";
import { postGame,getGames, updateGame } from "../controllers/gamecontroller.js";

const gameRouter = Router();

gameRouter.post("/games", postGame);
gameRouter.get("/games",getGames)
gameRouter.put("/games", updateGame)

export default gameRouter;