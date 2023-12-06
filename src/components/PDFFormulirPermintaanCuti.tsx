'use client'
import { PDFViewer } from "@react-pdf/renderer";
import FormulirPermintaanCuti from "./pdf/formulir-permintaan-cuti";

export default function PDFFormulirPermintaanCuti({ data }: any) {
  const dummyData = {
    nip: "123456",
    namaLengkap: "John Doe",
    tandaTangan: "/ttd.png",
    tanggalPengajuan: new Date(),
    keterangan: "Permohonan cuti",
    alamatSelamaCuti: "Jl. Contoh No. 123",
    lamaCuti: 10,
    tanggalMulai: new Date(),
    namaKepala: "Kepala",
    tandaTanganKepala: "/ttd.png",
    nipKepala: "654321",
    namaAtasan: "Atasan",
    tandaTanganAtasan: "/ttd.png",
    nipAtasan: "789012",
    namaJabatan: "Jabatan",
    dataCuti: {
      cutiTahunan: {
        namaCuti: "Cuti Tahunan",
        sisaCuti: 5,
        lamaCuti: 10,
      },
      cutiSakit: {
        namaCuti: "Cuti Sakit",
        sisaCuti: 3,
        lamaCuti: 5,
      },
    },
  };

  return <PDFViewer className="w-full h-full">
    <FormulirPermintaanCuti data={dummyData}/>
  </PDFViewer>;
}
