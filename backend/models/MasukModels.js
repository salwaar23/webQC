import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Masuk = db.define('masuk',{
    kode_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    kualitas: DataTypes.STRING,
    tgl_masuk: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Masuk;