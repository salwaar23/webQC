import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Produk = db.define('produk',{
    kode_produk: DataTypes.STRING,
    jenis_produk: DataTypes.STRING,
    jenis_kain: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    warna: DataTypes.STRING,
    motif: DataTypes.STRING,
    harga: DataTypes.STRING,
    jumlah: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Produk;