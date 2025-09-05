/*
  Warnings:

  - Added the required column `alias` to the `urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."urls" ADD COLUMN     "alias" TEXT NOT NULL,
ADD COLUMN     "users_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."urls" ADD CONSTRAINT "urls_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
