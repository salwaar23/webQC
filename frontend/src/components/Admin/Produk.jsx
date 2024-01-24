import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Produkpdf from "./pdf/produkpdf";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function prodadmin () {
    const [produk, setProduk] = useState([]);

    useEffect(() =>{
        getProduk();
    }, []);

    const getProduk = async () => {
        const response = await axios.get("http://localhost:5000/Produk");
        setProduk(response.data);
    };

    const deleteProduk = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Produk/${id}`);
            getProduk();
        } catch (error){
            console.log(error);
        }
    };

    const handlePrint = () =>{
        window.print();
    }

    return(
        <div>
            <div className="text-2xl text-center mt-10">Data Produk PT.MDS Textile</div>
            <div className="inline-flex">
                <Link to={`/AddProduk`}><div className="bg-green-400 w-24 h-8 pt-1 text-center text-white rounded-lg mt-10 ml-10">Tambah</div></Link>
                <button onClick={handlePrint}><div className="bg-yellow-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">
                    Print
                </div></button>
                <button className="bg-blue-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">
                    <PDFDownloadLink document={<Produkpdf />} fileName="Data_Produk">
                        Download
                    </PDFDownloadLink>
                </button>
                <Link to={`/admin`}><div className="bg-red-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-[850px]">Kembali</div></Link>
            </div>
            <div className="flex justify-center mt-10">
                <table className="">
                    <thead className="">
                        <tr className="">
                            <th className="border border-black px-4 text-xl">No.</th>
                            <th className="border border-black px-7 text-xl">Kode Produk</th>
                            <th className="border border-black px-7 text-xl">Jenis Produk</th>
                            <th className="border border-black px-4 text-xl">Jenis Kain</th>
                            <th className="border border-black px-4 text-xl">Ukuran</th>
                            <th className="border border-black px-7 text-xl">Warna</th>
                            <th className="border border-black px-7 text-xl">Motif</th>
                            <th className="border border-black px-10 text-xl">Harga</th>
                            <th className="border border-black px-4 text-xl">Jumlah</th>
                            <th className="border border-black px-4 text-xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produk.map((produk, index) => (
                        <tr key={produk.id}>
                            <td className="border border-black text-sm text-center pt-2">{index + 1}</td>
                            <td className="border border-black text-sm text-center">{produk.kode_produk}</td>
                            <td className="border border-black text-sm text-center">{produk.jenis_produk}</td>
                            <td className="border border-black text-sm text-center">{produk.jenis_kain}</td>
                            <td className="border border-black text-sm text-center">{produk.ukuran}</td>
                            <td className="border border-black text-sm text-center">{produk.warna}</td>
                            <td className="border border-black text-sm text-center">{produk.motif}</td>
                            <td className="border border-black text-sm text-center">{produk.harga}</td>
                            <td className="border border-black text-sm text-center">{produk.jumlah}</td>
                            <td className="border border-black text-center">
                                <div className="inline-flex">
                                    <Link to={`/EditProduk/${produk.id}`}><div className=""><FiEdit /></div></Link>
                                    <button onClick={() => deleteProduk(produk.id)}><div className="ml-3"><RiDeleteBin6Line /></div></button>
                                </div>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default prodadmin;