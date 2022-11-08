CREATE TABLE "games" (
	"id" SERIAL NOT NULL,
    "tittle" TEXT NOT NULL,
    "console" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "rating" NUMBER,
    "review" TEXT,
    "gameId" NUMBER NOT NULL REFERENCES "games"("id")
)