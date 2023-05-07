-- CreateTable
CREATE TABLE "invites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isRanked" BOOLEAN NOT NULL DEFAULT false,
    "game" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "num_players" INTEGER NOT NULL,
    "rank_players" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "invites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
