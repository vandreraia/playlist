import connection from "../database/postgres.js";
import { Game } from "../protocols/game.js";

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