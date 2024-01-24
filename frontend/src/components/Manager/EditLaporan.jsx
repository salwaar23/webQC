import { useNavigate, Link, useParams } from "react-router-dom";
import img from "../img/addre.png";
import axios from "axios";
import { useState, useEffect } from "react";

const EditLaporan = () =>{
    const[tgl, settgl] = useState("");
    const[kode_produk, setkodeproduk] = useState("");
    const[kualitas_kain, setkualitaskain] = useState("");
    const[kualitas_jahitan, setkualitasjahitan] = useState("");
    const[kualitas_print, setkualitasprint] = useState("");
    const[kualitas_warna, setkualitaswarna] = useState("");
    const[kualitas_bordir, setkualitasbordir] = useState("");
    const[keterangan, setketerangan] = useState("");
    const[jumlah, setjumlah] = useState("");
    const[pj, setpj] = useState("");
    const navigate = useNavigate;
    const { id } = useParams();

    useEffect(() => {
        getLaporanById();
    }, []);

    const updateLaporan = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/Laporan/${id}`,{
               tgl,
               kode_produk,
               kualitas_kain,
               kualitas_jahitan,
               kualitas_print,
               kualitas_warna,
               kualitas_bordir,
               keterangan,
               jumlah,
               pj
            })
            navigate("/laporan");
        } catch (error) {
            console.log(error)
        }
    };

    const getLaporanById = async () => {
        const response = await axios.get(`http://localhost:5000/Laporan/${id}`);
        console.log(response)
        settgl(response.data.tgl);
        setkodeproduk(response.data.kode_produk);
        setkualitaskain(response.data.kualitas_kain);
        setkualitasjahitan(response.data.kualitas_jahitan);
        setkualitasprint(response.data.kualitas_print);
        setkualitaswarna(response.data.kualitas_warna);
        setkualitasbordir(response.data.kualitas_bordir);
        setketerangan(response.data.keterangan);
        setjumlah(response.data.jumlah);
        setpj(response.data.pj);
    }


    return(
        <div>
            <form onSubmit={updateLaporan}> 
            <div className="mt-10 flex justify-center text-2xl">Form Pengujian Kualitas Produk</div>
            <div className="inline-flex ml-[200px] mt-4">
                <div>
                    <div className="inline-flex">
                        <label className="text-xl">Tanggal</label>
                        <div className="ml-[66px]">
                            <input type="text"
                            placeholder="Tanggal"
                            value={tgl}
                            onChange={(e) => settgl(e.target.value)}
                            className="ml-[22px] rounded-md border border-black w-[300px] h-[30px] pl-3"/>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kode Produk</label>
                        <div className="ml-5">
                            <input type="text"
                            placeholder="Kode Produk"
                            value={kode_produk}
                            onChange={(e) => setkodeproduk(e.target.value)}
                            className="ml-[22px] rounded-md border border-black w-[300px] h-[30px] pl-3"/>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Kain</label>
                        <div className="ml-5">
                            <select value={kualitas_kain} onChange={(e) => setkualitaskain(e.target.value)}
                            className="ml-[23px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Jahitan</label>
                        <div className="ml-5">
                            <select value={kualitas_jahitan} onChange={(e) => setkualitasjahitan(e.target.value)}
                             className="rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Print</label>
                        <div className="ml-5">
                            <select value={kualitas_print} onChange={(e) => setkualitasprint(e.target.value)}
                            className="ml-[21px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Warna</label>
                        <div className="ml-5">
                            <select value={kualitas_warna} onChange={(e) => setkualitaswarna(e.target.value)}
                            className="ml-[5px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Bordir</label>
                        <div className="ml-5">
                            <select value={kualitas_bordir} onChange={(e) => setkualitasbordir(e.target.value)}
                            className="ml-[9px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kelayakan</label>
                        <div className="ml-5">
                            <select value={keterangan} onChange={(e) => setketerangan(e.target.value)}
                            className="ml-[47px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>Layak</option>
                                <option>Belum Layak</option>
                            </select>
                        </div>
                    </div>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Jumlah</label>
                        <div className="ml-5">
                            <input type="text"
                            placeholder="Jumlah"
                            value={jumlah}
                            onChange={(e) => setjumlah(e.target.value)}
                            className="ml-[72px] rounded-md border border-black w-[300px] h-[30px] pl-3"/>
                        </div>
                    </div>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">PJ</label>
                        <div className="ml-5">
                            <input type="text"
                            placeholder="Penanggung Jawab"
                            value={pj}
                            onChange={(e) => setpj(e.target.value)}
                            className="ml-[117px] rounded-md border border-black w-[300px] h-[30px] pl-3"/>
                        </div>
                    </div>
                </div>
                <div className="-mt-[10px] mr-[100px]">
                    <img className="h-[450px] w-[750px]" src={img}/>
                </div>
            </div><br/>
            <div className="inline-flex ml-[480px] mt-[20px]">
                <button type="submit" className="bg-blue-500 w-[80px] h-[30px] text-center rounded-md pt-[3px] text-white">Submit</button>
                <Link to={`/laporanManager`}><div className="bg-red-500 w-[80px] text-center ml-3 rounded-md pt-[3px] text-white">Kembali</div></Link>
            </div>
            </form>
        </div>
        
    )
}

export default EditLaporan;