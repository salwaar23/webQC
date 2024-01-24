import { Sequelize } from "sequelize";

const db = new Sequelize ('qc_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;