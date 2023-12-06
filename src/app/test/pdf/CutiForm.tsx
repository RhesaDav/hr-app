import { Page, StyleSheet, Document, View, Text } from "@react-pdf/renderer";
import React from "react";

export interface CutiFormProps {
  data: {
    nip: string;
    namaLengkap: string;
    tandaTangan: string;
    tanggalPengajuan: Date;
    keterangan: string;
    alamatSelamaCuti: string;
    lamaCuti: number;
    tanggalMulai: Date;
    namaKepala: string;
    tandaTanganKepala: string;
    nipKepala: string;
    namaAtasan: string;
    tandaTanganAtasan: string;
    nipAtasan: string;
    namaJabatan: string;
    dataCuti: {
      cutiTahunan?: {
        namaCuti: string;
        sisaCuti: number;
        lamaCuti: number;
      };
      cutiSakit?: {
        namaCuti: string;
        sisaCuti: number;
        lamaCuti: number;
      };
    };
  };
}

const CutiForm: React.FC<CutiFormProps> = ({ data }) => {
  const styles4 = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#ffffff",
      padding: "5mm",
      fontFamily: "Helvetica",
    },
    tableRow: {
      flexDirection: 'row',
      height: 14,
    },
    tableCell: {
      width: '25%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      textAlign: 'left',
      fontSize: 11,
    },
    labelText: {
      textAlign: 'left',
      fontSize: 11,
    },
    valueText: {
      textAlign: 'left',
      fontSize: 11,
    },
  });
  

  return (
    <Document>
    <Page size="A4" style={styles4.page}>
      <View style={styles4.tableRow}>
        <View style={styles4.tableCell}>
          <Text style={styles4.headerText}>IV. LAMANYA CUTI</Text>
        </View>
      </View>
      <View style={styles4.tableRow}>
        <View style={styles4.tableCell}>
          <Text style={styles4.labelText}>Selama</Text>
        </View>
        <View style={styles4.tableCell}>
          <Text style={styles4.valueText}>4 hari</Text>
        </View>
        <View style={styles4.tableCell}>
          <Text style={styles4.labelText}>Mulai Tanggal</Text>
        </View>
        <View style={styles4.tableCell}>
          <Text style={styles4.valueText}>05 Juli 2022</Text>
        </View>
      </View>
    </Page>
  </Document>
  );
};

export default CutiForm;
