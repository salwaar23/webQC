import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Keluar = db.define('keluar',{
    kode_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    stok: DataTypes.STRING,
    tgl_keluar: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Keluar;