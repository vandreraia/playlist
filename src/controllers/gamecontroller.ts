import { Request, Response } from "express";
import { Game } from "../protocols/game";
import { Rating } from "../protocols/rating";
import { insertGame, insertRating, selectGame, selectGameByGenre, selectGameByConsole, setGameTrue } from "../repositories/gameRepository.js";

export async function postGame(req:Request, res:Response) {
    const newGame = req.body as Game;

    try {
        await insertGame(newGame);
        
        return res.status(201).send('inserted game');
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getGames(req:Request, res:Response) {
    const genre = req.query.genre as string;
    const console = req.query.console as string;

    try {
        if (genre) {
            const {rows: games} = await selectGameByGenre(genre);

            return res.status(200).send(games);
        }
        if (console) {
            const {rows: games} = await selectGameByConsole(console);

            return res.status(200).send(games);
        }
        const {rows: games} = await selectGame();
        
        return res.status(200).send(games);
    } catch (error) {
        return res.status(500).send(error.message)        
    }
    
}

export async function updateGame(req:Request, res:Response) {
    const rating = req.body as Rating;
    try {
        await setGameTrue(rating.gameId);

        await insertRating(rating);

        res.status(200).send("updated")
    } catch (error) {
        return res.status(500).send(error.message)       
    }
}