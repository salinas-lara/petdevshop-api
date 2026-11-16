-- CreateTable
CREATE TABLE "Tutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "tutorId" INTEGER NOT NULL,
    CONSTRAINT "Pet_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");
