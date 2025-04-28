-- AlterTable
ALTER TABLE "users_additional_details" ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "youtube_connected" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "youtube_tokens" JSONB;
