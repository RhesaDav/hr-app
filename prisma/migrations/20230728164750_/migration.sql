-- CreateEnum
CREATE TYPE "StatusCuti" AS ENUM ('proses', 'diterima', 'ditolak');

-- CreateEnum
CREATE TYPE "StatusVerifikasi" AS ENUM ('proses', 'diterima', 'ditolak');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('pria', 'wanita');

-- CreateEnum
CREATE TYPE "RolePengguna" AS ENUM ('karyawan', 'atasan', 'verifikator', 'kepala', 'admin');

-- CreateTable
CREATE TABLE "Bagian" (
    "id" SERIAL NOT NULL,
    "namaBagian" TEXT NOT NULL,
    "nipAtasan" TEXT,
    "idAtasan" INTEGER NOT NULL,

    CONSTRAINT "Bagian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jabatan" (
    "id" SERIAL NOT NULL,
    "namaJabatan" TEXT NOT NULL,
    "idBagian" INTEGER NOT NULL,

    CONSTRAINT "Jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JenisCuti" (
    "id" SERIAL NOT NULL,
    "namaCuti" TEXT NOT NULL,
    "lamaCuti" INTEGER NOT NULL,

    CONSTRAINT "JenisCuti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "nip" TEXT,
    "namaLengkap" TEXT,
    "idJabatan" INTEGER,
    "tempatLahir" TEXT,
    "tanggalLahir" TIMESTAMP(3),
    "jenisKelamin" "JenisKelamin",
    "role" "RolePengguna" DEFAULT 'karyawan',
    "tandaTangan" TEXT,
    "setup" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cuti" (
    "id" SERIAL NOT NULL,
    "nip" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "idJenisCuti" INTEGER NOT NULL,
    "lamaCuti" INTEGER NOT NULL,
    "tanggalPengajuan" TIMESTAMP(3) NOT NULL,
    "tanggalMulai" TIMESTAMP(3) NOT NULL,
    "tanggalSelesai" TIMESTAMP(3) NOT NULL,
    "tanggalArray" JSONB NOT NULL,
    "keterangan" TEXT NOT NULL,
    "alamatSelamaCuti" TEXT NOT NULL,
    "berkas" TEXT,
    "idPengganti" INTEGER NOT NULL,
    "idPemohon" INTEGER NOT NULL,
    "statusAkhir" "StatusCuti" NOT NULL DEFAULT 'proses',
    "tahapVerifikasi" INTEGER NOT NULL DEFAULT 0,
    "persetujuanPengganti" INTEGER,

    CONSTRAINT "Cuti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerifikasiBerkas" (
    "id" SERIAL NOT NULL,
    "idJenisCuti" INTEGER NOT NULL,
    "idCuti" INTEGER NOT NULL,
    "nipVerifikator" TEXT NOT NULL,
    "idVerifikator" INTEGER NOT NULL,
    "tanggalVerifikasi" TIMESTAMP(3) NOT NULL,
    "keteranganVerifikasi" TEXT NOT NULL,
    "suratCuti" INTEGER NOT NULL,
    "formulirCuti" INTEGER NOT NULL,
    "beritaAcara" INTEGER NOT NULL,
    "berkasCuti" INTEGER NOT NULL,
    "statusVerifikasi" "StatusVerifikasi",

    CONSTRAINT "VerifikasiBerkas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerifikasiAtasan" (
    "id" SERIAL NOT NULL,
    "idJenisCuti" INTEGER NOT NULL,
    "idCuti" INTEGER NOT NULL,
    "nipAtasan" TEXT NOT NULL,
    "idAtasan" INTEGER NOT NULL,
    "tanggalVerifikasi" TIMESTAMP(3) NOT NULL,
    "keteranganVerifikasi" TEXT NOT NULL,
    "statusVerifikasi" "StatusVerifikasi" NOT NULL,

    CONSTRAINT "VerifikasiAtasan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerifikasiKepala" (
    "id" SERIAL NOT NULL,
    "idJenisCuti" INTEGER NOT NULL,
    "idCuti" INTEGER NOT NULL,
    "nipKepala" TEXT NOT NULL,
    "idKepala" INTEGER NOT NULL,
    "tanggalVerifikasi" TIMESTAMP(3) NOT NULL,
    "keteranganVerifikasi" TEXT NOT NULL,
    "statusVerifikasi" "StatusVerifikasi" NOT NULL,

    CONSTRAINT "VerifikasiKepala_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nip_key" ON "User"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "VerifikasiBerkas_idCuti_key" ON "VerifikasiBerkas"("idCuti");

-- CreateIndex
CREATE UNIQUE INDEX "VerifikasiAtasan_idCuti_key" ON "VerifikasiAtasan"("idCuti");

-- CreateIndex
CREATE UNIQUE INDEX "VerifikasiKepala_idCuti_key" ON "VerifikasiKepala"("idCuti");

-- AddForeignKey
ALTER TABLE "Bagian" ADD CONSTRAINT "Bagian_idAtasan_fkey" FOREIGN KEY ("idAtasan") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jabatan" ADD CONSTRAINT "Jabatan_idBagian_fkey" FOREIGN KEY ("idBagian") REFERENCES "Bagian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idJabatan_fkey" FOREIGN KEY ("idJabatan") REFERENCES "Jabatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_idJenisCuti_fkey" FOREIGN KEY ("idJenisCuti") REFERENCES "JenisCuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_idPengganti_fkey" FOREIGN KEY ("idPengganti") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuti" ADD CONSTRAINT "Cuti_idPemohon_fkey" FOREIGN KEY ("idPemohon") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiBerkas" ADD CONSTRAINT "VerifikasiBerkas_idJenisCuti_fkey" FOREIGN KEY ("idJenisCuti") REFERENCES "JenisCuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiBerkas" ADD CONSTRAINT "VerifikasiBerkas_idCuti_fkey" FOREIGN KEY ("idCuti") REFERENCES "Cuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiBerkas" ADD CONSTRAINT "VerifikasiBerkas_idVerifikator_fkey" FOREIGN KEY ("idVerifikator") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiAtasan" ADD CONSTRAINT "VerifikasiAtasan_idJenisCuti_fkey" FOREIGN KEY ("idJenisCuti") REFERENCES "JenisCuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiAtasan" ADD CONSTRAINT "VerifikasiAtasan_idCuti_fkey" FOREIGN KEY ("idCuti") REFERENCES "Cuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiAtasan" ADD CONSTRAINT "VerifikasiAtasan_idAtasan_fkey" FOREIGN KEY ("idAtasan") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiKepala" ADD CONSTRAINT "VerifikasiKepala_idJenisCuti_fkey" FOREIGN KEY ("idJenisCuti") REFERENCES "JenisCuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiKepala" ADD CONSTRAINT "VerifikasiKepala_idCuti_fkey" FOREIGN KEY ("idCuti") REFERENCES "Cuti"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerifikasiKepala" ADD CONSTRAINT "VerifikasiKepala_idKepala_fkey" FOREIGN KEY ("idKepala") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
