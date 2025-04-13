-- DropIndex
DROP INDEX "usuario_senha_key";

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "senha" SET DATA TYPE TEXT;
