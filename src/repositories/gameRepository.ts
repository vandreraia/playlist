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

export async function selectGameByGenre(genre: string) {
    return connection.query(`
    SELECT * FROM games
    WHERE genre = $1
    `,[genre]);
}

export async function selectGameByConsole(console: string) {
    return connection.query(`
    SELECT * FROM games
    WHERE console = $1
    `,[console]);
}

export async function setGameTrue(gameId: number) {
    return connection.query(`
    UPDATE games
    SET status = true
    WHERE id = $1;
    `, [gameId])
}

export async function insertRating(rating: Rating) {
    return connection.query(`
    INSERT INTO rating
    (rating, review, "gameId")
    VALUES
    ($1, $2, $3)
    `, [rating.rating, rating.review, rating.gameId])
}