import sequelize from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = sequelize;

const Product = database.define('products', {
    title : {
        type : DataTypes.STRING
    },
    price : {
        type : DataTypes.DOUBLE
    }
}, {
    freezeTableName : true
});

export default Product;
