import img1 from "../img/product.png";
import img2 from "../img/reports.png";
import img3 from "../img/items.png";
import { Link } from "react-router-dom";

function Dashadm (){
    return(
        <div>
            <div className="text-3xl flex justify-center mt-10">Selamat Datang, Admin!</div>
            <div className="flex justify-center">
                <div className="inline-flex mt-40">
                    <Link to={`/produk`}><img className="w-[130px] h-[180px]" src={img1}/></Link>
                    <Link to={`/laporan`}><img className="w-[130px] h-[180px] ml-40" src={img2}/></Link>
                    <Link to={`/barang`}><img className="w-[130px] h-[180px] ml-40" src={img3}/></Link>
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <Link to={`/`}><div className="bg-blue-500 w-[100px] text-center rounded-xl py-1 text-white">Logout</div></Link>
            </div>
        </div>
    )
}

export default Dashadm;