import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const up = async () => {
  await prisma.$executeRaw(

    `
    -- Bagian
    
    INSERT INTO bagian (namaBagian, nipAtasan) VALUES ('Bagian 1', '1234567890');
    INSERT INTO bagian (namaBagian, nipAtasan) VALUES ('Bagian 2', '9876543210');
    
    -- Jabatan
    
    INSERT INTO jabatan (namaJabatan, bagian_id) VALUES ('Jabatan 1', 1);
    INSERT INTO jabatan (namaJabatan, bagian_id) VALUES ('Jabatan 2', 1);
    INSERT INTO jabatan (namaJabatan, bagian_id) VALUES ('Jabatan 3', 2);
    INSERT INTO jabatan (namaJabatan, bagian_id) VALUES ('Jabatan 4', 2);
    
    -- JenisCuti
    
    INSERT INTO jeniscuti (namaCuti, lamaCuti) VALUES ('Cuti Tahunan', 14);
    INSERT INTO jeniscuti (namaCuti, lamaCuti) VALUES ('Cuti Sakit', 7);
    INSERT INTO jeniscuti (namaCuti, lamaCuti) VALUES ('Cuti Melahirkan', 3);
    INSERT INTO jeniscuti (namaCuti, lamaCuti) VALUES ('Cuti Bersalin', 4);
    
    -- Account
    
    INSERT INTO account (userId, type, provider, providerAccountId) VALUES (1, 'google', 'google.com', '1234567890');
    INSERT INTO account (userId, type, provider, providerAccountId) VALUES (2, 'facebook', 'facebook.com', '9876543210');
    
    -- Session
    
    INSERT INTO session (sessionToken, userId, expires) VALUES ('1234567890', 1, '2023-08-01');
    INSERT INTO session (sessionToken, userId, expires) VALUES ('9876543210', 2, '2023-08-02');
    
    -- User
    
    INSERT INTO user (name, email, nip, namaLengkap, jabatan_id, tempatLahir, tanggalLahir, jenisKelamin, role) VALUES ('John Doe', 'johndoe@email.com', '1234567890', 'John Doe', 1, 'Jakarta', '1980-01-01', 'pria', 'karyawan');
    INSERT INTO user (name, email, nip, namaLengkap, jabatan_id, tempatLahir, tanggalLahir, jenisKelamin, role) VALUES ('Jane Doe', 'janedoe@email.com', '9876543210', 'Jane Doe', 2, 'Surabaya', '1981-02-02', 'wanita', 'karyawan');
    
    -- Bagian
    
    INSERT INTO bagian (namaBagian, nipAtasan) VALUES
    ('Bagian 1', '1234567890'),
    ('Bagian 2', '9876543210');
    
    -- Jabatan
    
    INSERT INTO jabatan (namaJabatan, bagian_id) VALUES
    ('Jabatan 1', 1),
    ('Jabatan 2', 1),
    ('Jabatan 3', 2),
    ('Jabatan 4', 2);
    
    -- JenisCuti
    
    INSERT INTO jeniscuti (namaCuti, lamaCuti) VALUES
    ('Cuti Tahunan', 14),
    ('Cuti Sakit', 7),
    ('Cuti Melahirkan', 3),
    ('Cuti Bersalin', 4);
    
    -- Account
    
    INSERT INTO account (userId, type, provider, providerAccountId) VALUES
    (1, 'google', 'google.com', '1234567890'),
    (2, 'facebook', 'facebook.com', '9876543210');
    
    -- Session
    
    INSERT INTO session (sessionToken, userId, expires) VALUES
    ('1234567890', 1, '2023-08-01'),
    ('9876543210', 2, '2023-08-02');
    
    -- User
    
    INSERT INTO user (name, email, nip, namaLengkap, jabatan_id, tempatLahir, tanggalLahir, jenisKelamin, role) VALUES
    ('John Doe', 'johndoe@email.com', '1234567890', 'John Doe', 1, 'Jakarta', '1980-01-01', 'pria', 'karyawan'),
    ('Jane Doe', 'janedoe@email.com', '9876543210', 'Jane Doe', 2, 'Surabaya', '1981-02-02', 'wanita', 'karyawan');
    
    -- Cuti
    
    INSERT INTO cuti (nip, namaLengkap, jeniscuti_id, lamaCuti, tanggalPengajuan, tanggalMulai, tanggalSelesai, keterangan, alamatSelamaCuti, berkas, pengganti_id, pemohon_id, statusAkhir, tahapVerifikasi, persetujuanPengganti) VALUES
    ('1234567890', 'John Doe', 1, 14, '2023-07-01', '2023-08-15', '2023-08-29', 'Cuti untuk menghadiri pernikahan saudara', 'Jl. Jendral Sudirman No. 1', NULL, NULL, 1, 'proses', NULL),
    ('9876543210', 'Jane Doe', 2, 7, '2023-07-02', '2023-07-15', '2023-07-29', 'Cuti untuk berobat', 'Jl. Gajah Mada No. 1', NULL, NULL, 1, 'proses', NULL);
    
    INSERT INTO "VerifikasiBerkas" (jenisCuti, idJenisCuti, cuti, idCuti, nipVerifikator, verifikator, idVerifikator, tanggalVerifikasi, keteranganVerifikasi, suratCuti, formulirCuti, beritaAcara, berkasCuti, statusVerifikasi)
    VALUES ('Cuti Tahunan', 1, 'Cuti John Doe', 1, '1234567890', 'John Doe', 1, NOW(), 'Verifikasi berhasil', 1, 1, 1, 1, 'diterima');
    
    INSERT INTO "VerifikasiBerkas" (jenisCuti, idJenisCuti, cuti, idCuti, nipVerifikator, verifikator, idVerifikator, tanggalVerifikasi, keteranganVerifikasi, suratCuti, formulirCuti, beritaAcara, berkasCuti, statusVerifikasi)
    VALUES ('Cuti Sakit', 2, 'Cuti Jane Doe', 2, '9876543210', 'Jane Doe', 2, NOW(), 'Verifikasi berhasil', 2, 2, 2, 2, 'proses');
    
    INSERT INTO "VerifikasiAtasan" (jenisCuti, idJenisCuti, cuti, idCuti, nipAtasan, atasan, idAtasan, tanggalVerifikasi, keteranganVerifikasi, statusVerifikasi)
    VALUES ('Cuti Tahunan', 1, 'Cuti John Doe', 1, '1234567890', 'John Doe', 1, NOW(), 'Verifikasi berhasil', 'diterima');
    
    INSERT INTO "VerifikasiAtasan" (jenisCuti, idJenisCuti, cuti, idCuti, nipAtasan, atasan, idAtasan, tanggalVerifikasi, keteranganVerifikasi, statusVerifikasi)
    VALUES ('Cuti Sakit', 2, 'Cuti Jane Doe', 2, '9876543210', 'Jane Doe', 2, NOW(), 'Verifikasi berhasil', 'proses');
    
    INSERT INTO "VerifikasiKepala" (jenisCuti, idJenisCuti, cuti, idCuti, nipKepala, kepala, idKepala, tanggalVerifikasi, keteranganVerifikasi, statusVerifikasi)
    VALUES ('Cuti Tahunan', 1, 'Cuti John Doe', 1, '1234567890', 'John Doe', 1, NOW(), 'Verifikasi berhasil', 'diterima');
    
    INSERT INTO "VerifikasiKepala" (jenisCuti, idJenisCuti, cuti, idCuti, nipKepala, kepala, idKepala, tanggalVerifikasi, keteranganVerifikasi, statusVerifikasi)
    VALUES ('Cuti Sakit', 2, 'Cuti Jane Doe', 2, '9876543210', 'Jane Doe', 2, NOW(), 'Verifikasi berhasil', 'proses');
    
    INSERT INTO "sisacutin" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (1, '1234567890', 'John Doe', 1, 'Cuti Tahunan', 12, 10);
    INSERT INTO "sisacutin" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (2, '9876543210', 'Jane Doe', 2, 'Cuti Sakit', 7, 5);
    
    INSERT INTO "sisacutin1" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (1, '1234567890', 'John Doe', 1, 'Cuti Tahunan', 12, 10);
    INSERT INTO "sisacutin1" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (2, '9876543210', 'Jane Doe', 2, 'Cuti Sakit', 7, 5);
    
    INSERT INTO "sisacutin2" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (1, '1234567890', 'John Doe', 1, 'Cuti Tahunan', 12, 10);
    INSERT INTO "sisacutin2" (userId, nip, namaLengkap, idJenisCuti, namaCuti, lamaCuti, sisaCuti) VALUES (2, '9876543210', 'Jane Doe', 2, 'Cuti Sakit', 7, 5);
    
    INSERT INTO "_StatusCuti" (name) VALUES ('proses');
    INSERT INTO "_StatusCuti" (name) VALUES ('diterima');
    INSERT INTO "_StatusCuti" (name) VALUES ('ditolak');
    
    INSERT INTO "_StatusVerifikasi" (name) VALUES ('proses');
    INSERT INTO "_StatusVerifikasi" (name) VALUES ('diterima');
    INSERT INTO "_StatusVerifikasi" (name) VALUES ('ditolak');
    
    INSERT INTO "_JenisKelamin" (name) VALUES ('pria');
    INSERT INTO "_JenisKelamin" (name) VALUES ('wanita');
    
    INSERT INTO "_RolePengguna" (name) VALUES ('karyawan');
    INSERT INTO "_RolePengguna" (name) VALUES ('atasan');
    INSERT INTO "_RolePengguna" (name) VALUES ('verifikator');
    INSERT INTO "_RolePengguna" (name) VALUES ('kepala');
    INSERT INTO "_RolePengguna" (name) VALUES ('admin');
    
    `
  );
};

