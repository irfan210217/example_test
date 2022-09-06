import sequelize from "sequelize";
import database from "../src/config/database.js"

const { DataTypes } = sequelize;

const Transactions = database.define('transactions', {
  userId : {
    type : DataTypes.STRING
  },
  nameTransactions : {
    type : DataTypes.STRING
  },
  typeTransactions : {
    type :DataTypes.STRING
  },
  methodTransaction : {
    type : DataTypes.STRING
  },
  statusTransactions : {
    type : DataTypes.STRING
  },
  quanty : {
    type : DataTypes.INTEGER
  },
  price : {
    type : DataTypes.INTEGER
  }
}, {
  freezeTableName : true
});


export default Transactions;
