import React, {useState, useEffect} from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import axios from "axios";

const styles = StyleSheet.create({

  text:{
    margin: 6,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },

  text1:{
    textAlign: "center",
    margin: 6,
    fontSize: 16,
    paddingTop: "20px",
    fontFamily: 'Times-Roman',
  },
  text2:{
    textAlign: "center",
    margin: 6,
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },

  text3:{
    textAlign: "center",
    marginTop: "5px",
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },
  text4:{
    textAlign: "right",
    marginRight: "60px",
    marginTop: "400px",
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },
  text6:{
    textAlign: "center",
    fontSize: 10,
    paddingBottom: "20px",
    fontFamily: 'Times-Roman',
  },
  text7:{
    textAlign: "center",
    fontSize: 10,
    fontFamily: 'Times-Roman',
  },

  text5:{
    textAlign: "right",
    marginRight: "60px",
    marginTop: "90px",
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },

  table: { 
    display: "table",  
    width: "auto",
    marginTop: "30px",
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0,
    borderRightWidth: 0, 
    borderBottomWidth: 0,
    borderTopWidth: 0
  }, 
  table1: { 
    display: "table",  
    width: "auto",
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0,
    borderRightWidth: 0, 
    borderBottomWidth: 1,
    borderTopWidth: 0
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row",
  
  }, 
  tableCol: { 
    width: "80px", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 1,
    
  }, 

  tableCol1: { 
    width: "40px", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 1, 
    borderTopWidth: 1 
  }, 

  tableCol2: { 
    width: "50px", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 1 
  }, 

  tableCol3: { 
    width: "60px", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 1
  }, 
  tableCol4: { 
    width: "90px", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 1
  }, 

  tableCell: { 
    margin: "auto", 
    marginTop: 5, 
    fontSize: 10,
  }
});

const Keluarpdf = () => {
  const [keluar, setKeluar] = useState([]);

    useEffect(() =>{
        getKeluar();
    }, []);

    const getKeluar = async () => {
        const response = await axios.get("http://localhost:5000/Keluar");
        setKeluar(response.data);
    };

  return (
    <Document>
      <Page size="A4">
        <View style={styles.table1}>  
          <View style={{display: "flex", flexDirection: "col"}}>
            <Text style={styles.text1}>PT. MDS Textile</Text>
            <Text style={styles.text7}>Jln. ....... </Text>
            <Text style={styles.text6}>Website: ......... Telp: .......... </Text>
          </View>
        </View>
          <Text style={styles.text3}>Data Barang Keluar</Text>
        <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>No.</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Kode Barang</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Nama Barang</Text> 
          </View> 
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell}>Jumlah</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Kualitas</Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>Tanggal Masuk</Text> 
          </View> 
        </View>
        {keluar.map((keluar, index) => (
        <View style={styles.tableRow} key={keluar.id}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>{index + 1}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{keluar.kode_barang}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{keluar.nama_barang}</Text> 
          </View>
          <View style={styles.tableCol3}> 
            <Text style={styles.tableCell}>{keluar.jumlah}</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{keluar.stok}</Text> 
          </View> 
          <View style={styles.tableCol4}> 
            <Text style={styles.tableCell}>{keluar.tgl_keluar}</Text> 
          </View> 
        </View> 
        ))}
      </View>
      <View>
        <Text style={styles.text4}>Mengetahui,</Text>
      </View>
      <View>
        <Text style={styles.text5}>Kepala Gudang</Text>
      </View>
      </Page>
    </Document>
  );
};

export default Keluarpdf;
