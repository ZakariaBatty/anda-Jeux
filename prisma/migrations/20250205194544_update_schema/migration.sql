/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Winner` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Winner` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Winner_winnerCode_key` ON `Winner`;

-- AlterTable
ALTER TABLE `Winner` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
