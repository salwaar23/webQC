import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import Laporanpdf from "./pdf/laporanpdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const reportsadmin =()=>{
    const [reports, setReports] = useState([]);

    useEffect(() =>{
        getLaporan();
    }, []);

    const getLaporan = async () => {
        const response = await axios.get("http://localhost:5000/Laporan");
        setReports(response.data);
    };

    const deleteLaporan = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Laporan/${id}`);
            getLaporan();
        } catch (error){
            console.log(error);
        }
    };

    const handlePrint = () => {
        table.print();
    }
    return(
        <div>
            <div className="text-2xl text-center mt-10">Laporan Kualitas Produk PT.MDS Textile</div>
            <div className="inline-flex">
                
                <button onClick={handlePrint} className="bg-yellow-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-[70px]">Print</button>
                <button className="bg-blue-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">
                    <PDFDownloadLink document={<Laporanpdf />} fileName="Data_Kualitas_Produk">
                        Download
                    </PDFDownloadLink>
                </button>
                <Link to={`/manager`}><div className="bg-red-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-[900px]">Kembali</div></Link>
            </div>
            <div className="flex justify-center mt-10">
                <table className="">
                    <thead className="">
                        <tr className="">
                            <th className="border border-black px-4 text-md">No.</th>
                            <th className="border border-black px-4 text-md">Tanggal</th>
                            <th className="border border-black px-4 text-md">Kode Produk</th>
                            <th className="border border-black px-4 text-md">Kualitas Kain</th>
                            <th className="border border-black px-4 text-md">Kualitas Jahitan</th>
                            <th className="border border-black px-4 text-md">Kualitas Print</th>
                            <th className="border border-black px-4 text-md">Kualitas Warna</th>
                            <th className="border border-black px-4 text-md">Kualitas Bordir</th>
                            <th className="border border-black px-3 text-md">Keterangan</th>
                            <th className="border border-black px-3 text-md">Jumlah</th>
                            <th className="border border-black px-6 text-md">PJ</th>
                            <th className="border border-black px-3 text-md">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((reports, index) => (
                            <tr key={reports.id}>
                                <td className="border border-black text-sm text-center">{index + 1}</td>
                                <td className="border border-black text-center text-sm">{reports.tgl}</td>
                                <td className="border border-black text-center text-sm">{reports.kode_produk}</td>
                                <td className="border border-black text-center text-sm">{reports.kualitas_kain}</td>
                                <td className="border border-black text-center text-sm">{reports.kualitas_jahitan}</td>
                                <td className="border border-black text-center text-sm">{reports.kualitas_print}</td>
                                <td className="border border-black text-center text-sm">{reports.kualitas_warna}</td>
                                <td className="border border-black text-center text-sm">{reports.kualitas_bordir}</td>
                                <td className="border border-black text-center text-sm">{reports.keterangan}</td>
                                <td className="border border-black text-center text-sm">{reports.jumlah}</td>
                                <td className="border border-black text-center text-sm">{reports.pj}</td>
                                <td className="border border-black">
                                    <div className="inline-flex">
                                        <Link to={`/EditLaporan/${reports.id}`}><div className="ml-5"><FiEdit /></div></Link>
                                        <button onClick={() => deleteLaporan(reports.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
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

export default reportsadmin;