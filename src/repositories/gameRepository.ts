import connection from "../database/postgres.js";
import { Game } from "../protocols/game.js";
import { Rating } from "../protocols/rating.js";

export async function insertGame(game: Game) {
    return connection.query(`
    INSERT INTO games
    ("tittle", "console", "genre", "status")
    VALUES
    ($1, $2, $3, $4)
    `, [game.tittle, game.console, game.genre, game.status]);
}

export async function selectGame() {
    return connection.query(`
    SELECT * FROM games
    `);
}

export async function setGameTrue(gameId:number) {
    return connection.query(`
    UPDATE games
    SET status = true
    WHERE id = $1;
    `, [gameId])
}

export async function insertRating(rating:Rating) {
    return connection.query(`
    INSERT INTO rating
    (rating, review, "gameId")
    VALUES
    ($1, $2, $3)
    `,[rating.rating, rating.review, rating.gameId])
}