import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboardadmin from "./components/Admin/Dashboard";
import Produk from "./components/Admin/Produk";
import Laporan from "./components/Admin/Laporan";
import Barang from "./components/Admin/Barang";
import Masuk from "./components/Admin/Masuk";
import Keluar from "./components/Admin/Keluar";
import Staf from "./components/Staf/Dashboard";
import Reports from "./components/Staf/Reports";
import AddProduk from "./components/Admin/AddProduk";
import EditProduk from "./components/Admin/EditProduk";
import AddMasuk from "./components/Admin/AddMasuk";
import AddKeluar from "./components/Admin/AddKeluar";
import EditKeluar from "./components/Admin/EditKeluar";
import EditMasuk from "./components/Admin/EditMasuk";
import Manager from "./components/Manager/Dashboard";
import LaporanM from "./components/Manager/Laporan";
import EditLaporanM from "./components/Manager/EditLaporan";

function App () {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin" element={<Dashboardadmin/>}/>
            <Route path="/produk" element={<Produk/>}/>
            <Route path="/laporan" element={<Laporan/>}/>
            <Route path="/barang" element={<Barang/>}/>
            <Route path="/masuk" element={<Masuk/>}/>
            <Route path="/keluar" element={<Keluar/>}/>
            <Route path="/staf" element={<Staf/>}/>
            <Route path="/reportsStaf" element={<Reports/>}/>
            <Route path="/AddProduk" element={<AddProduk/>}/>
            <Route path="/EditProduk/:id" element={<EditProduk/>}/>
            <Route path="/AddMasuk" element={<AddMasuk/>}/>
            <Route path="/editMasuk/:id" element={<EditMasuk/>}/>
            <Route path="/Addkeluar" element={<AddKeluar/>}/>
            <Route path="/editkeluar/:id" element={<EditKeluar/>}/>
            <Route path="/manager" element={<Manager/>}/>
            <Route path="/laporanManager" element={<LaporanM/>}/>
            <Route path="/EditLaporan/:id" element={<EditLaporanM/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;