/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `users_additional_details` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_additional_details_user_id_key" ON "users_additional_details"("user_id");
