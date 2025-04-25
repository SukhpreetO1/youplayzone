-- CreateTable
CREATE TABLE "users_additional_details" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "google_drive_link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_additional_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_additional_details" ADD CONSTRAINT "users_additional_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
