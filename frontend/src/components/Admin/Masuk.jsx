import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import Masukpdf from "./pdf/masukpdf";
import { PDFDownloadLink } from "@react-pdf/renderer";


function masuk () {
    const [masuk, setMasuk] = useState([]);

    useEffect(() =>{
        getMasuk();
    }, []);

    const getMasuk = async () => {
        const response = await axios.get("http://localhost:5000/Masuk");
        setMasuk(response.data);
    };

    const deleteMasuk = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Masuk/${id}`);
            getMasuk();
        } catch (error){
            console.log(error);
        }
    };
    
    const handlePrint = () => {
        window.print();
    }

    return(
        <div>
        <div className="text-2xl text-center mt-10">Data Barang Masuk PT.MDS Textile</div>
        <div className="inline-flex">
            <Link to={`/AddMasuk`}><div className="bg-green-400 w-24 h-8 pt-1 text-center text-white rounded-lg mt-10 ml-10">Tambah</div></Link>
            <button onClick={handlePrint} className="bg-yellow-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">Print</button>
            <button className="bg-blue-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">
                    <PDFDownloadLink document={<Masukpdf />} fileName="Data_Barang_Masuk">
                        Download
                    </PDFDownloadLink>
            </button>
            <Link to={`/barang`}><div className="bg-red-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-[850px]">Kembali</div></Link>
        </div>
        <div className="flex justify-center mt-10">
            <table className="">
                <thead className="">
                    <tr className="">
                        <th className="border border-black px-4 text-xl">No.</th>
                        <th className="border border-black px-7 text-xl">Kode Barang</th>
                        <th className="border border-black px-7 text-xl">Nama Barang</th>
                        <th className="border border-black px-4 text-xl">Jumlah</th>
                        <th className="border border-black px-4 text-xl">Kualitas</th>
                        <th className="border border-black px-7 text-xl">Tanggal Masuk</th>
                        <th className="border border-black px-7 text-xl">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {masuk.map((masuk, index) => (
                        <tr key={masuk.id}>
                            <td className="border border-black text-sm text-center pt-2">{index + 1}</td>
                            <td className="border border-black text-sm text-center">{masuk.kode_barang}</td>
                            <td className="border border-black text-sm text-center">{masuk.nama_barang}</td>
                            <td className="border border-black text-sm text-center">{masuk.jumlah}</td>
                            <td className="border border-black text-sm text-center">{masuk.kualitas}</td>
                            <td className="border border-black text-sm text-center">{masuk.tgl_masuk}</td>
                            <td className="border border-black text-center">
                                <div className="inline-flex">
                                    <Link to={`/editMasuk/${masuk.id}`}><div className=""><FiEdit /></div></Link>
                                    <button onClick={() => deleteMasuk(masuk.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
                                </div>
                            </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    </div>
    )
}

export default masuk;