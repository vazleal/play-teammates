/*
  Warnings:

  - A unique constraint covering the columns `[steam_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[riot_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_email_username_steam_id_riot_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_username_key" ON "users"("email", "username");
