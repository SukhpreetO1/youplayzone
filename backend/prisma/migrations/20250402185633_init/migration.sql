-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social_Media_Platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Social_Media_Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users_Social_Media" (
    "id" SERIAL NOT NULL,
    "social_media_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Users_Social_Media_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users_Social_Media" ADD CONSTRAINT "Users_Social_Media_social_media_id_fkey" FOREIGN KEY ("social_media_id") REFERENCES "Social_Media_Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users_Social_Media" ADD CONSTRAINT "Users_Social_Media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
