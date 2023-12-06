import * as React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

export interface FormulirPermintaanCutiProps {
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

// Font.register({
//   family: "Open Sans",
//   fonts: [
//     {
//       src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
//     },
//     {
//       src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
//       fontWeight: 600,
//     },
//   ],
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "5mm",
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5mm",
    fontSize: 10,
  },
  rightAligned: {
    textAlign: "right",
    fontSize: 8,
  },
  signatureBox: {
    border: "1px solid black",
    height: "20mm",
    width: "40mm",
    margin: "5mm 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto", // Move to the right side
  },

  //yth
  container: {
    left: "50%",
    width: "100%%",
    fontSize: 8,
    color: "#000",
    lineHeight: 1.5,
    textAlign: "center",
  },
  content: {
    width: "100%%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  title: {
    fontWeight: "bold",
    fontSize: 8,
  },
  highlight: {
    backgroundColor: "#f5f5f5",
  },
  highlight2: {
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },

  //table
  table: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginBottom: "20px",
  },
  tableHeader: {
    fontSize: 8,
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableRow: {
    fontSize: 8,
    display: "flex",
    flexDirection: "row",
  },
  tableCellHeader: {
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderRightStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
  },
  tableCell: {
    textAlign: "left",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    paddingLeft: 2,
  },
  tableColumn: {
    width: "50%",
  },

  checkmarkIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  crossIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
});

const stylesFour = StyleSheet.create({
  table: {
    marginBottom: '20px'
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    width: "25%",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "left",
    fontSize: 8,
  },
  labelText: {
    textAlign: "left",
    fontSize: 8,
  },
  valueText: {
    textAlign: "left",
    fontSize: 8,
  },
});

const stylesFive = StyleSheet.create({
  table: {
    marginBottom: '20px'
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    width: "20%",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "left",
    fontSize: 8,
  },
  labelText: {
    textAlign: "left",
    fontSize: 8,
    paddingLeft: 5,
  },
  valueText: {
    textAlign: "center",
    fontSize: 8,
  },
});

const stylesSix = StyleSheet.create({
  table: {
    marginBottom: '20px'
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '33.33%',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 8,
  },
  labelText: {
    textAlign: 'left',
    fontSize: 8,
    paddingLeft: 5,
  },
  valueText: {
    textAlign: 'center',
    fontSize: 8,
  },
});

const stylesSeven = StyleSheet.create({
  table: {
    marginBottom: '20px'
  },
  tableRow: {
    flexDirection: 'row',
    height: 15,
  },
  tableCell: {
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 8,
  },
  valueText: {
    textAlign: 'left',
    fontSize: 8,
    paddingLeft: 5,
  },
  signatureText: {
    textAlign: 'center',
    fontSize: 8,
  },
  signatureCell: {
    paddingLeft: 56,
    textAlign: 'left',
  },
});

const stylesEight = StyleSheet.create({
  table: {
    marginBottom: '20px'
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 8,
  },
  valueText: {
    textAlign: 'left',
    fontSize: 8,
    paddingLeft: 5,
  },
  signatureText: {
    textAlign: 'center',
    fontSize: 8,
  },
  signatureCell: {
    paddingLeft: 56,
    textAlign: 'left',
  },
});

const FormulirPermintaanCuti:React.FC<FormulirPermintaanCutiProps> = ({data}) => {
  const tandaTanganKepalaBase64 = `data:image/png;base64,${data.tandaTanganKepala}`;
  const tandaTanganBase64 = `data:image/png;base64,${data.tandaTangan}`;
  const tandaTanganAtasanBase64 = `data:image/png;base64,${data.tandaTanganAtasan}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="/letter-header.png" />
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>ANAK LAMPIRAN 1B</Text>
              <Text style={styles.highlight}>
                PERATURAN BADAN KEPEGAWAIAN NEGARA
              </Text>
              <Text style={styles.highlight}>REPUBLIK INDONESIA</Text>
              <Text style={styles.highlight}>NOMOR 24 TAHUN 2018</Text>
              <Text style={styles.highlight}>TENTANG</Text>
              <Text style={styles.highlight}>
                TATA CARA PEMBERIAN CUTI PEGAWAI NEGERI SIPIL
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.highlight2}>Banjarbaru, 28 Juli 2023</Text>
              <Text style={styles.highlight2}>Kepada</Text>
              <Text style={styles.highlight2}>
                Yth. Kepala Balai Veteriner Banjarbaru
              </Text>
              <Text style={styles.highlight2}>di Tempat</Text>
            </View>
          </View>
        </View>

        <Text style={styles.header}>
          FORMULIR PERMINTAAN DAN PEMBERIAN CUTI
        </Text>

        <View>
          <View style={styles.table}>
            <Text style={styles.tableHeader}>I. DATA PEGAWAI</Text>
            <View style={styles.tableContainer}>
              <View
                style={{
                  ...styles.tableColumn,
                  borderRightWidth: 1,
                  borderRightColor: "#000",
                  borderRightStyle: "solid",
                }}
              >
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>Nama</Text>
                  <Text style={styles.tableCell}>Dhya Fajria Rahmi</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>NIP</Text>
                  <Text style={styles.tableCell}>410017093</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>Jabatan</Text>
                  <Text style={styles.tableCell}>Staf</Text>
                </View>
              </View>
              <View style={styles.tableColumn}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeader}>Masa Kerja</Text>
                  <Text style={styles.tableCell}>24 Tahun 00 Bulan</Text>
                </View>
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    borderBottomStyle: "solid",
                  }}
                >
                  <Text style={styles.tableCellHeader}>Unit Kerja</Text>
                  <Text style={styles.tableCell}>
                    Balai Veteriner Banjarbaru
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.table}>
            <Text style={styles.tableHeader}>II. JENIS CUTI YANG DIAMBIL</Text>
            <View style={styles.tableContainer}>
              <View
                style={{
                  ...styles.tableColumn,
                  borderRightWidth: 1,
                  borderRightColor: "#000",
                  borderRightStyle: "solid",
                }}
              >
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    1. Cuti Tahunan
                  </Text>
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/check.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    2. Cuti Besar
                  </Text>
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/cross.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    3. Cuti Sakit
                  </Text>
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/check.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.tableColumn}>
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    4. Cuti Melahirkan
                  </Text>{" "}
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/check.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>{" "}
                </View>
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    borderBottomStyle: "solid",
                  }}
                >
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    5. Cuti Karena Alasan Penting
                  </Text>
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/check.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    ...styles.tableRow,
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    borderBottomStyle: "solid",
                  }}
                >
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    Cuti Diluar Tanggungan Negara
                  </Text>
                  <View style={{ ...styles.tableCell, width: "10%" }}>
                    <Image
                      src={"/check.png"}
                      style={{ height: "10px", width: "10px" }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.table}>
            <Text style={styles.tableHeader}>III. ALASAN CUTI</Text>
            <View style={styles.tableContainer}>
            <View
                style={{
                  ...styles.tableColumn,
                  borderRightWidth: 1,
                  borderRightColor: "#000",
                  borderRightStyle: "solid",
                }}
              >
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    Nama
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.tableColumn,
                  borderRightWidth: 1,
                  borderRightColor: "#000",
                  borderRightStyle: "solid",
                }}
              >
                <View style={styles.tableRow}>
                  <Text
                    style={{
                      ...styles.tableCellHeader,
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    Dhya Fajria Rahmi
                  </Text>
                </View>
              </View>
              {/* <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "#000",
                  borderRightStyle: "solid",
                }}
              >
              <View style={{...styles.tableRow}}>
                <Text style={{...styles.tableCellHeader}}>Nama</Text>
                <Text style={{...styles.tableCell}}>Dhya Fajria Rahmi</Text>
              </View>
              </View> */}
            </View>
          </View>
        </View>

        <View style={stylesFour.table}>
          <View style={[stylesFour.tableRow]}>
            <View
              style={[
                stylesFour.tableCell,
                { width: "100%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFour.headerText}>IV. LAMANYA CUTI</Text>
            </View>
          </View>
          <View style={[stylesFour.tableRow]}>
            <View style={[stylesFour.tableCell]}>
              <Text style={stylesFour.labelText}>Selama</Text>
            </View>
            <View style={[stylesFour.tableCell]}>
              <Text style={stylesFour.valueText}>4 hari</Text>
            </View>
            <View style={[stylesFour.tableCell]}>
              <Text style={stylesFour.labelText}>Mulai Tanggal</Text>
            </View>
            <View style={[stylesFour.tableCell]}>
              <Text style={stylesFour.valueText}>05 Juli 2022</Text>
            </View>
          </View>
        </View>

        <View style={stylesFive.table}>
          <View style={[stylesFive.tableRow]}>
            <View
              style={[
                stylesFive.tableCell,
                { borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.headerText}>V. CATATAN CUTI</Text>
            </View>
          </View>
          <View style={[stylesFive.tableRow]}>
            <View
              style={[
                stylesFive.tableCell,
                { width: "60%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.labelText}>1. CUTI TAHUNAN</Text>
            </View>
            <View style={[stylesFive.tableCell, { width: "40%" }]}>
              <Text style={stylesFive.labelText}>2. BESAR</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "20%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
          <View style={[stylesFive.tableRow]}>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.labelText}>Tahun</Text>
            </View>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.valueText}>Sisa</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "40%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.valueText}>Keterangan</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "60%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.labelText}>3. CUTI SAKIT</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "20%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
          <View style={[stylesFive.tableRow]}>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.labelText}>N-2</Text>
            </View>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.valueText}>6</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "40%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "60%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.labelText}>4. CUTI MELAHIRKAN</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "20%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
          <View style={[stylesFive.tableRow]}>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.labelText}>N-1</Text>
            </View>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.valueText}>2</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "40%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "60%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.labelText}>
                5. CUTI KARENA ALASAN PENTING
              </Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "20%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
          <View style={[stylesFive.tableRow]}>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.labelText}>N</Text>
            </View>
            <View style={[stylesFive.tableCell]}>
              <Text style={stylesFive.valueText}>12</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "40%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "60%", borderRightWidth: 0 },
              ]}
            >
              <Text style={stylesFive.labelText}>
                6. CUTI DI LUAR TANGGUNGAN NEGARA
              </Text>
            </View>
            <View
              style={[
                stylesFive.tableCell,
                { width: "20%", borderRightWidth: 0 },
              ]}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
        </View>

        <View style={stylesSix.table}>
        <View style={[stylesSix.tableRow]}>
          <View style={[stylesSix.tableCell, { width: '100%', borderRightWidth: 0 }]}>
            <Text style={stylesSix.headerText}>VI. ALAMAT SELAMA MENJALANKAN CUTI</Text>
          </View>
        </View>
        <View style={[stylesSix.tableRow]}>
          <View style={[stylesSix.tableCell, { width: '66.67%', borderRightWidth: 0 }]}>
            <Text style={stylesSix.labelText}>Jl. Mentaos Timur, No. 18, RT/RW 007/003, Banjarbaru Utara</Text>
          </View>
          <View style={[stylesSix.tableCell, { width: '33.33%', borderRightWidth: 0 }]}>
            <Text style={stylesSix.valueText}>Hormat Saya</Text>
          </View>
        </View>
        <View style={[stylesSix.tableRow]}>
          <View style={[stylesSix.tableCell, { width: '33.33%', borderRightWidth: 0 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAArCAYAAACtt3w4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC/UlEQVR4nO3aX8hkYxgA8N/M+IRda9uE3ZVywWLJDdqSLRdWViQlRXGh7JVyo7ApcqFccf21Vi4odxRxIUpxoVW0aEWbP/mXtZHtWx+Wi2e0n2lmzpzznTnf/Hl+Nc3MO++8z1vPOec97zNDSimllFJK8661hrFPw4bu6xP4eQ3nMnOaSmwLF+Jq3IA78T6OdT+/AI/izYbmk2pwOY7iEdyCMwf0+3zIZ2nCtPFW97nI+dg/3umktdDC8bWexKw4ZYxjHxc3SKP6B50xzaWs0/u0LePvpidS1TgTO63uxQP4q6f9VNyDg43PaMJUuaz+WWP8Fs7GjXgaB3DlkP4n8J64wRs03gF5Mow9sY/jvBXvOyJxH+JjfIeHsROXYaFgvEuxp6DPVrxUYo4zqWpiR91b78BduAMv4Ac8JNb1qvvzd50smvTTxqGKY8+MpZL9F/BJif4dfI+bsb5krEG2YLGgz3JNsabWPqwr0f8S7C0Z46OS/Yu0cMTwu/O5T+zdouo0qoP6bzOG+QpnlfxOkdvw4JDP5z6xu0VyR9HGFxVibMOLFb43TAd/GFwtm/vEbsVjI/Z9EtdUjHPE/5PwQbet3+O5EcfcL9bbfuY+sW1R2C+yBa+sIs4TBiehqutwe5/2DXin5lhTaVH8XDfIJnwmCglV3Yddq/h+P2182af9kPL3ATOpIxLXq41bRaVn2L5xFOvVv84S++SnVrzfiZfHEGdqLeIcsU/dgefxE+6vMcZVNY71nzPwavf1ZnHXvlFsiXofE6eJSV0kiurb8Kw4gw83ELcOx8Re/HVsF79A9Vrqtj8jfnv+Fb+LO+t+/RvRREH7MK7HFQ3Eqts+sf7vLujXEmf1XnEgrBMFl4vxtiikfCMSflSs3z/iN3EA1K6py8h25cqFk2IXvsWnqxijIy7rm8S/RDZ2328Wyb+22/41fnHyClDkDbwmyqq9/Zcncn2YU53uY0HxHxRaOBc3iSLQyjwuiYMlpZRSSimllFJKKaWUUkopTY1/AY/helq5/sB5AAAAAElFTkSuQmCC"
              style={{ width: 118, height: 43 }}
            />
          </View>
        </View>
        <View style={[stylesSix.tableRow]}>
          <View style={[stylesSix.tableCell]}>
            <Text style={stylesSix.labelText}>Telp</Text>
          </View>
          <View style={[stylesSix.tableCell, { width: '66.67%', borderRightWidth: 0 }]}>
            <Text>&nbsp;</Text>
          </View>
          <View style={[stylesSix.tableCell, { width: '33.33%', borderRightWidth: 0 }]}>
            <Text style={stylesSix.valueText}>(Dhya Fajria Rahmi)</Text>
          </View>
        </View>
        <View style={[stylesSix.tableRow]}>
          <View style={[stylesSix.tableCell]}>
            <Text style={stylesSix.labelText}>NIP.</Text>
          </View>
          <View style={[stylesSix.tableCell]}>
            <Text style={stylesSix.valueText}>410017093</Text>
          </View>
          <View style={[stylesSix.tableCell, { width: '66.67%', borderRightWidth: 0 }]}>
            <Text>&nbsp;</Text>
          </View>
        </View>
      </View>

      <View style={stylesSeven.table}>
        <View style={[stylesSeven.tableRow]}>
          <View style={[stylesSeven.tableCell, { width: 510 }]}>
            <Text style={stylesSeven.headerText}>VII. PERTIMBANGAN ATASAN LANGSUNG</Text>
          </View>
        </View>
        <View style={[stylesSeven.tableRow]}>
          <View style={[stylesSeven.tableCell, { width: 77 }]}>
            <Text style={stylesSeven.valueText}>DISETUJUI</Text>
          </View>
          <View style={[stylesSeven.tableCell, { width: 76 }]}>
            <Text style={stylesSeven.valueText}>PERUBAHAN</Text>
          </View>
          <View style={[stylesSeven.tableCell, { width: 77 }]}>
            <Text style={stylesSeven.valueText}>DITANGGUHKAN</Text>
          </View>
          <View style={[stylesSeven.tableCell, { width: 76 }]}>
            <Text style={stylesSeven.valueText}>TIDAK DISETUJUI</Text>
          </View>
          <View style={[stylesSeven.tableCell, { width: 204 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAdklEQVQ4jcXOuwmAQBBF0QtmRgpiX2YW4AfEFswEexE7MdDEetZEYVjWz+6CvnCG82bg7wSOLgE616MpsAEKmH2wAnIfXMhl6IPHY9i4YIBJLNsHXJouRMBiKHmFr0p6DVd3WJasAlnhM7FWUttg+ckAZC74++wQny+UKzHLegAAAABJRU5ErkJgggAA"
              style={{ width: 118, height: 43 }}
            />
          </View>
        </View>
        <View style={[stylesSeven.tableRow, { height: 24 }]}>
          <View style={[stylesSeven.tableCell, { width: 77 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 16, height: 16 }}
            />
          </View>
          <View style={[stylesSeven.tableCell, { width: 76 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
          <View style={[stylesSeven.tableCell, { width: 77 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAAFVBMVEX///8AAACDg4OysrI0NDTe3t5aWlrJMjfpAAADn0lEQVR42u3cS3LbMBAFQIEEef8jO7t4YwvE58lV6F5brsrTcDADS3m9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeOsSQSLlu9xSWO4o/xxyWOwuRdDre0YtRdDLneU/QUdiFnQoZkGHYhZ0KGZBr5g0ShF0QC2CTm2Bgv5EcxZ0rGsIOtQ1BD1VKYL+eDkLOlTOgl4+bAg6NGwIevHGLej4KSjoXNsQdKhtCDowbQh63F0E/afas6AXL4OCzh6Dgg4dg4JO5izoldugoINjnaCzOQs6lLOg164pgk7nLOhQzoJO9GdB53IWdChnQa/dBwUdzrmeAlx3jyTlDld3zFJ+pDNlX7WP5KyYEznf/oeOxOJtmosMdmKODHYbtuar5Ae7HU/Aa8Y/W8xtvTWa8569+Z5RYreYW2ey1EFYd98xjkzj2HQ9+T4qJHLedXA+51zsVF3j0Qm2ukFve3dU5xTc5Sb0aWO9Jv0eh+C7Olw2QW/bnX/oq+esX6Q7f9+6p5R0S87bxvzzPHYsyHnjvwfOK75D2+iswmen1qVtdJ9e19TGse+08f5hnznZbfw3wTrx3ufUnjPDmGVw7FqiTno4Xlubdy1xynm4pie8ZfX1kvSU87DKeULSo43Dp3Ab79vqWOOQc3PS50jjkPODq6CBt0rOD3bnN2nJed4mfnW+Ws7z7t1Oc93MpM+el8q5I+mexiHWjsXlft44pNo1Tl9PnwSZdg55DxuHLwz2DnnHo8fA91/7D8Qnr/CdwYGka/szYFEZOhDP5h+X5diB2PoASHKweRxtjcPAMZx0U+NwEI5viLXhLXHD0eRoPA+rBr12b3nbODToOW36ePNDGvSsaVqDDk3T9ddGLr15zeP6ZTRxlTQx6fpyxZGZ8Ux2sRnPZJdaxTWO0IyncYRmPI3jc81D4wg1D4llmodVJdM83HGEmoe0Ms3D5WioeYgq0zychJk7DydhqHnYCccddsK/U9JCmuEy2v2VYVpEmeZhtAsN0wLKDNMKOtM87Cqh89CukilpBR06DxV0pqQVdGg/VNCZ81BBh5qHgl7gUNAfK2kFnRnxFHToykNBZ0Y8BR0a8RR06DwUR2bEcw8dKmlhZEY8BR0qaVFkStpnOUJbiyAyW4tP24VKWgyZ89D2HVrEbd+hkpZBpkub7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjvC6vuHPt8gVSNAAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
          <View style={[stylesSeven.tableCell, { width: 76 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
        </View>
        <View style={[stylesSeven.tableRow, { height: 15 }]}>
          <View style={[stylesSeven.tableCell, { width: 204 }]}>
            <Text style={stylesSeven.signatureText}>(Sumarno, S. Sos, MAP)</Text>
          </View>
        </View>
        <View style={[stylesSeven.tableRow, { height: 15 }]}>
          <View style={[stylesSeven.tableCell, { width: 204 }]}>
            <Text style={stylesSeven.signatureText}>NIP. 430010583</Text>
          </View>
        </View>
      </View>

      <View style={stylesEight.table}>
        <View style={[stylesEight.tableRow]}>
          <View style={[stylesEight.tableCell, { width: 510 }]}>
            <Text style={stylesEight.headerText}>
              VIII. PERTIMBANGAN PEJABAT YANG BERWENANG MEMBERIKAN CUTI
            </Text>
          </View>
        </View>
        <View style={[stylesEight.tableRow]}>
          <View style={[stylesEight.tableCell, { width: 77 }]}>
            <Text style={stylesEight.valueText}>DISETUJUI</Text>
          </View>
          <View style={[stylesEight.tableCell, { width: 76 }]}>
            <Text style={stylesEight.valueText}>PERUBAHAN</Text>
          </View>
          <View style={[stylesEight.tableCell, { width: 77 }]}>
            <Text style={stylesEight.valueText}>DITANGGUHKAN</Text>
          </View>
          <View style={[stylesEight.tableCell, { width: 76 }]}>
            <Text style={stylesEight.valueText}>TIDAK DISETUJUI</Text>
          </View>
          <View style={[stylesEight.tableCell, { width: 204 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAArCAYAAACtt3w4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC+klEQVR4nO3aS4hVZRwA8N+9jmPqlFmkhVRU2srosVJSCUNaSCC1KIweJoRELUShFgUtCqIWBdVGEQuKiB4QEe0i6V3G9Fj0wloUURBSSAgurMX/SuM4d+Z6zrn3nDvz/8GB4Z7vfN9/7v9+53yPQ0oppZRSSimllFJKKaWUUkoppX5o1R3AFOZjM27Cv51jorc6x7EBxzVUmpTYs/AJRvEgPutS7hLsw7X4YzChpaK24AAu6LH8YvzYv3BSWW28jCc6f/fqfVzWl4hSaUvxOdYWvLZfzsM1uKKPbcxaLTEAuqjuQCYZx9d4Ci/ioObF2GjPY03dQUzQxle4ftLnO7Bp8OEMpxa+rTuICU7cPW6c4tw2Q5rY0xmwVOUe3F9Du1M5Q0yx9ojkTjaC4wONaIjtwcV1ByGSdghLpinzupha9csYzuxHxXX02KZ4A+vxd5fzo7ga/1Tc7gY8jKNiqndDxfXXpgk99nw8NkOZjbilwjYX4wvsF3PwJq36VaIJif0eC2Yo853q7mhrRFLPqai+Rtrm1GnFILXMPCB6EldW0NaoWNd+vIK6Gq+NL2uOYbrELsHeCtpYi2/Uf3caqJ/UO3CbLrHjyo+EV4vdqZGS9Qyd7epdxO+W2Edwc8m6r8PvmFeynqG0Ck8PuM021mE3PnXq4OkOPFei/nnYhdfMwZ56wggOi7clBmETfsOznbb3YvmE87fiTcWnIBvFqHd3iRhnjbvEF9pPC8W8cZeTn5sP4SrRy17BzoL1r8DP4n+Zk7febg7g0grra+Fy3C3mquM4e4pyi8QA7pBi23Jt3Iu3xY8nTTJfTH1WlqxnNR4VvecZkdyZrMK7Bdq6sNPOnQWunVMW4U+xsT2mt1vaQvFc+wi/4j6xoHC6z8gt+LjH6xaITYEPxIt3qQctsTj+nviif8GRLsdf+BC3qWbnZStexbldzo/hAfwg3owcCrNuIbqg20XvXYd3xI+HeGtyKV7AS/WEVkwm9mRtLPP/Hu0RMU1KqRn+A6+BbvzR9IPAAAAAAElFTkSuQmCC"
              style={{ width: 118, height: 43 }}
            />
          </View>
        </View>
        <View style={[stylesEight.tableRow, { height: 24 }]}>
          <View style={[stylesEight.tableCell, { width: 77 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 16, height: 16 }}
            />
          </View>
          <View style={[stylesEight.tableCell, { width: 76 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
          <View style={[stylesEight.tableCell, { width: 77 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
          <View style={[stylesEight.tableCell, { width: 76 }]}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVQYlX3Puw3CQAwG4I9LpmADVmcGBgEhGhQg4dHTkNA4khUdWLrCvv8JOxzRqE8T/1s4YcINpQK8Y8R+PvRB6BOhxD7imp1LKGeHeb9UHJVQmOKN6LD60UVJ4KmmuIwyJuVHjZBLdotIz1yuwZDKzBlzyRdaOP9pnYW6NkBvbCJnng/WOGD4ArLvN0+Qn5X5AAAAAElFTkSuQmCC"
              style={{ width: 11, height: 11 }}
            />
          </View>
        </View>
        <View style={[stylesEight.tableRow, { height: 15 }]}>
          <View style={[stylesEight.tableCell, { width: 204 }]}>
            <Text style={stylesEight.signatureText}>(drh. Cahyadi Eko Ardianto)</Text>
          </View>
        </View>
        <View style={[stylesEight.tableRow, { height: 15 }]}>
          <View style={[stylesEight.tableCell, { width: 204 }]}>
            <Text style={stylesEight.signatureText}>NIP 430020693</Text>
          </View>
        </View>
      </View>
      </Page>
    </Document>
  );
};

export default FormulirPermintaanCuti;
