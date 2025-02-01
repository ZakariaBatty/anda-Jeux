-- AlterTable
ALTER TABLE `Winner` ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `profession` VARCHAR(191) NULL,
    MODIFY `fullName` VARCHAR(191) NULL;
