/*
  Warnings:

  - You are about to drop the column `createdAt` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `social_media_platform` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `social_media_platform` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users_social_media` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users_social_media` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `social_media_platform` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users_social_media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "roles" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "social_media_platform" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users_social_media" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
