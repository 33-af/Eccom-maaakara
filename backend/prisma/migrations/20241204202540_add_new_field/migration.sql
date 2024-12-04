-- CreateTable
CREATE TABLE "ChickenJerk" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChickenJerk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChickenJerk" ADD CONSTRAINT "ChickenJerk_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
