
require('app-module-path').addPath(__dirname);
global.dbConnectionPool = []; 
global.dbConn = null;
const Server = require('./server');
const SQLDatabase = require('./databases/mysql');


(async () => {
  sequelize = await SQLDatabase.init();
  await Server.init(sequelize);
})();

module.exports = Server;
