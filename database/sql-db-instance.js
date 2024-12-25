const Models = require('src/mysql-models');
const { Sequelize, DataTypes, Utils } = require('sequelize');

let dbUsername = process.env.DB_USER;
let dbPassword = process.env.DB_PASS;
let dbHost = process.env.MYSQL_HOST;
let dbPort = process.env.DB_PORT

const sequelize = new Sequelize("", dbUsername, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql',
    logging: process.env.LOGGING === 'false' ? false : true
});

createOrGetDbInstance = async function (dbName) {
    await createDbIfNotExists(dbName);
    return createSequelizeInstance(dbName);
}

createSequelizeInstance = async function (dbName) {
    const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
        host: dbHost,
        port: dbPort,
        dialect: 'mysql',
    });

    await sequelize.authenticate();
    const models = await Models.init({ sequelize, DataTypes, Utils });
    return { models, sequelize, DataTypes };
}

createDbIfNotExists = async function (dbName) {
    let err = null;
    let db = null;
    dbName = sequelize.escape(dbName);
    dbName = dbName.replace(/[']+/g, '');
    let query = `CREATE DATABASE IF NOT EXISTS GLOCARY_MANAGEMENT;`;
    db = await sequelize.query(
        query,
        {
            type: sequelize.QueryTypes.RAW,
        }
    );
    return db;
}

module.exports = {
    createOrGetDbInstance
}