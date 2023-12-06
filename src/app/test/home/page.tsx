"use client";
import React, { useEffect, useRef, useState } from "react";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import PDFPreview from "../pdf/PDFPreview";
import { Button } from "@/components/ui/Button";
import CutiForm from "../pdf/CutiForm";

const data = {
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

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <div>
          <BlobProvider document={<PDFPreview data={data} />}>
            {({ url }) => {
              return(
              <Button>
                <a href={(url != null) ? url : ""} target="_blank">Open in new tab</a>
              </Button>
            )}}
          </BlobProvider>
          <PDFViewer showToolbar height={'1000px'} width={'100%'}>
            {/* <CutiForm data={data}/> */}
          <PDFPreview data={data} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default Home;
