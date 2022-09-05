import {Sequelize} from "sequelize";

const database = new Sequelize ('losterDB', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

export default database;
