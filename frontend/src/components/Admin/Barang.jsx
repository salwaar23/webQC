import immg from "../img/masuk.png";
import iimg from "../img/keluar.png";
import { Link } from "react-router-dom";

function barang (){
    return(
        <div>
            <div className="text-3xl flex justify-center mt-10">Items</div>
            <div className="flex justify-center">
                <div className="inline-flex mt-[120px]">
                    <Link to={`/masuk`}><img className="w-[160px] h-[180px]" src={immg}/></Link>
                    <Link to={`/keluar`}><img className="w-[130px] h-[180px] ml-24" src={iimg}/></Link>
                </div>
            </div>
            <div className="flex justify-center mt-[120px]">
                <Link to={`/admin`}><div className="bg-red-500 w-[100px] text-center rounded-xl py-1 text-white">Kembali</div></Link>
            </div>
        </div>
    )
}

export default barang;