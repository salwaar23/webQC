import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Laporan = db.define('reports',{
    kode_produk: DataTypes.STRING,
    kualitas_kain: DataTypes.STRING,
    kualitas_jahitan: DataTypes.STRING,
    kualitas_print: DataTypes.STRING,
    kualitas_warna: DataTypes.STRING,
    kualitas_bordir: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    tgl: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    pj:DataTypes.STRING
}, {
    freezeTableName: true
})

export default Laporan;