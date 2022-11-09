CREATE TABLE "games" (
	"id" SERIAL NOT NULL UNIQUE,
    "tittle" TEXT NOT NULL,
    "console" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "rating" (
    "id" SERIAL NOT NULL UNIQUE,
    "rating" INTEGER,
    "review" TEXT,
    "gameId" INTEGER NOT NULL REFERENCES "games"("id")
);