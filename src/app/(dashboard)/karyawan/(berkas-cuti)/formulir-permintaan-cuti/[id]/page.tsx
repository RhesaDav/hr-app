import { db } from "@/lib/db";
import dynamic from "next/dynamic";

import React from "react";
import { Metadata } from "next/types";

interface BerkasCutiProps {
  params: {
    id: string;
  };
}

const FormulirPermintaanCutiRender = dynamic(
  () => import("@/components/PDFFormulirPermintaanCuti"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Surat Permintaan Cuti",
};

export default async function BerkasCuti({ params }: BerkasCutiProps) {
  const id = params.id;
  return <FormulirPermintaanCutiRender/>
}