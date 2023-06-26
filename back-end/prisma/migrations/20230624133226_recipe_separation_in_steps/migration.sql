/*
  Warnings:

  - You are about to drop the column `HowTo` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "HowTo";

-- CreateTable
CREATE TABLE "Steps" (
    "id" SERIAL NOT NULL,
    "Description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "RecipeId" INTEGER NOT NULL,

    CONSTRAINT "Steps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Steps" ADD CONSTRAINT "Steps_RecipeId_fkey" FOREIGN KEY ("RecipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
