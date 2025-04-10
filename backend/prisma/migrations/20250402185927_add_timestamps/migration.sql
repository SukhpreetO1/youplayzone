/*
  Warnings:

  - Added the required column `updatedAt` to the `Roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Social_Media_Platform` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users_Social_Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Roles" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Social_Media_Platform" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users_Social_Media" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
