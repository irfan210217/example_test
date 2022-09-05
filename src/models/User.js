import sequelize from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = sequelize;

const User = database.define('users', {
    username : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    admin : {
        type : DataTypes.INTEGER
    },
    role : {
        type : DataTypes.INTEGER
    },
    token : {
        type : DataTypes.STRING
    }
}, {
    freezeTableName : true
});

export default User;
