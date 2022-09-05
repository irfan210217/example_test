import sequelize from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = sequelize;

const Karyawan = database.define('karyawan', {
    nama_karyawan : {
        type : DataTypes.STRING,
    },
    bidang_kerja : {
        type : DataTypes.STRING
    },
    bon : {
        type : DataTypes.DOUBLE
    }
}, {
    freezeTableName : true
});

export default Karyawan;