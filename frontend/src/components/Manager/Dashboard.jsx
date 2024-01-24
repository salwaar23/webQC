import { Link } from "react-router-dom";
import img from "../img/reportss.png";

function manager(){
    return(
        <div>
        <div className="text-3xl flex justify-center mt-10">Selamat Datang, Manager!</div>
        <div className="flex justify-center">
            <div className="inline-flex mt-[120px]">
                <Link to={`/laporanManager`}><img className="w-[130px] h-[180px]" src={img}/></Link>
            </div>
        </div>
        <div className="flex justify-center mt-24">
            <Link to={`/`}><div className="bg-blue-500 w-[100px] text-center rounded-xl py-1 text-white">Logout</div></Link>
        </div>
    </div>
    )
}

export default manager;