import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Keluarpdf from "./pdf/keluarpdf";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const keluar=()=>{
    const [keluar, setKeluar] = useState([]);

    useEffect(() =>{
        getKeluar();
    }, []);

    const getKeluar = async () => {
        const response = await axios.get("http://localhost:5000/Keluar");
        setKeluar(response.data);
    };

    const deleteKeluar = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Keluar/${id}`);
            getKeluar();
        } catch (error){
            console.log(error);
        }
    };

    const handlePrint = () => {
        window.print();
    }

    return(
        <div>
        <div className="text-2xl text-center mt-10">Data Barang Keluar Produk PT.MDS Textile</div>
        <div className="inline-flex">
            <Link to={`/addkeluar`}><div className="bg-green-400 w-24 h-8 pt-1 text-center text-white rounded-lg mt-10 ml-10">Tambah</div></Link>
            <button onClick={handlePrint} className="bg-yellow-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">Print</button>
            <button className="bg-blue-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">
                    <PDFDownloadLink document={<Keluarpdf />} fileName="Data_Barang_Keluar">
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
                        <th className="border border-black px-4 text-xl">Stok</th>
                        <th className="border border-black px-7 text-xl">Tanggal Keluar</th>
                        <th className="border border-black px-7 text-xl">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {keluar.map((keluar, index) => (
                        <tr key={keluar.id}>
                            <td className="border border-black text-sm text-center pt-2">{index + 1}</td>
                            <td className="border border-black text-sm text-center">{keluar.kode_barang}</td>
                            <td className="border border-black text-sm text-center">{keluar.nama_barang}</td>
                            <td className="border border-black text-sm text-center">{keluar.jumlah}</td>
                            <td className="border border-black text-sm text-center">{keluar.stok}</td>
                            <td className="border border-black text-sm text-center">{keluar.tgl_keluar}</td>
                            <td className="border border-black text-center">
                                <div className="inline-flex">
                                    <Link to={`/editkeluar/${keluar.id}`}><div className=""><FiEdit /></div></Link>
                                    <button onClick={() => deleteKeluar(keluar.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
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

export default keluar;