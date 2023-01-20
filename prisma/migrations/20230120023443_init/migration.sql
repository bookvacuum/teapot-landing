-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "company" TEXT,
    "role" TEXT,
    "content" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
