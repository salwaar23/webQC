import { Link, useNavigate } from "react-router-dom";
import imgg from "../img/add.png";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const Addkeluar = () => {
    const[kode_barang, setkodebarang] = useState("");
    const[nama_barang, setnamabarang] = useState("");
    const[jumlah, setjumlah] = useState("");
    const[stok, setstok] = useState("");
    const[tgl_keluar, settgl] = useState("");
    const navigate = useNavigate();

    const saveKeluar = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/Keluar", {
               kode_barang,
               nama_barang,
               jumlah,
               stok,
               tgl_keluar
            });
            navigate("/keluar");
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div>
            <div className="text-center mt-10 text-2xl">Tambah Data Barang keluar PT. MDS Textile</div>
            <Link to={`/keluar`}><div className="mt-[40px] inline-flex bg-red-400 w-24 h-10 rounded-md ml-10">
                <div className="pt-[14px] text-white pl-[9px]"><IoIosArrowBack /></div>
                <div className="pt-[10px] text-white">Kembali</div>
            </div></Link><br />
            <div><form onSubmit={saveKeluar}><div className="inline-flex mt-[40px] ml-[80px]">
                <div className="">
                    <label>Kode Barang</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        value={kode_barang}
                        onChange={(e) => setkodebarang(e.target.value)}
                        placeholder="Kode Barang"
                        className="h-8 w-72 bg-slate-300 rounded-md pl-2" />
                    </div>
                    <div className="mt-4"><label>Nama Barang</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        value={nama_barang}
                        onChange={(e) => setnamabarang(e.target.value)}
                        placeholder="Nama Barang"
                        className="h-8 w-72 bg-slate-300 rounded-md pl-2" />
                    </div></div>
                    <div className="mt-4"><label>Jumlah</label>
                    <div className="mt-2">
                        <input type="text"
                        value={jumlah}
                        onChange={(e) => setjumlah(e.target.value)}
                        placeholder="Jumlah"
                        className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                    </div></div>
                </div>
                <div className="ml-20">
                    
                    <div className="mt-10">
                        <label>Stok</label>
                        <div className="mt-2">
                            <input type="text"
                            value={stok}
                            onChange={(e) => setstok(e.target.value)}
                            placeholder="Stok"
                            className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label>Tanggal keluar</label>
                            <div className="mt-2">
                                <input type="text"
                                value={tgl_keluar}
                                onChange={(e) => settgl(e.target.value)}
                                placeholder="Tanggal keluar" 
                                className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                            </div>
                    </div>
                </div>
                <div className="-mt-[30px] ml-[150px]">
                    <img className="w-[360px] h-[330px]" src={imgg}/>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 w-24 h-10 text-xl text-white text-center rounded-md pt-[6px] ml-[360px] mt-10">Tambah</button>
            </form>
            </div>
        </div>
        
    );   
};

export default Addkeluar;