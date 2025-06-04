"use client";

import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    width: "25%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  header: {
    backgroundColor: "#eee",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default function TableTemplate({ data }) {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Admin Table</Text>

          <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
              <Text style={styles.col}>Name</Text>
              <Text style={styles.col}>Email</Text>
              <Text style={styles.col}>Phone</Text>
              <Text style={styles.col}>Address</Text>
            </View>
            {data.map((item, i) => (
              <View style={styles.row} key={i}>
                <Text style={styles.col}>{item.name}</Text>
                <Text style={styles.col}>{item.email}</Text>
                <Text style={styles.col}>{item.phone}</Text>
                <Text style={styles.col}>{item.address}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
