/*
  Warnings:

  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Social_Media_Platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users_Social_Media` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_role_id_fkey";

-- DropForeignKey
ALTER TABLE "Users_Social_Media" DROP CONSTRAINT "Users_Social_Media_social_media_id_fkey";

-- DropForeignKey
ALTER TABLE "Users_Social_Media" DROP CONSTRAINT "Users_Social_Media_user_id_fkey";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Social_Media_Platform";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Users_Social_Media";

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL DEFAULT 2,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_media_platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "social_media_platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_social_media" (
    "id" SERIAL NOT NULL,
    "social_media_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_social_media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "social_media_platform_name_key" ON "social_media_platform"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_social_media" ADD CONSTRAINT "users_social_media_social_media_id_fkey" FOREIGN KEY ("social_media_id") REFERENCES "social_media_platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_social_media" ADD CONSTRAINT "users_social_media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
