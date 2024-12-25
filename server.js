const Hapi = require('@hapi/hapi');
const Routes = require('src/routes');

exports.init = async (database) => {
    const port = process.env.PORT;
    const host = process.env.HOST;

    const serverConnectionOptions = {
        port: port,
        host: host,
        state: {
            strictHeader: false,
            ignoreErrors: true,
        },
        routes: {
            cors: true,
            timeout: {
                server: 3600000,
                socket: 3700000,
            },
            security: {
                hsts: {
                    maxAge: 15768000,
                    includeSubDomains: true,
                    preload: true
                },
                xframe: 'sameorigin',
                xss: true,
                noSniff: true
            }
        },
    };

    server = new Hapi.Server(serverConnectionOptions);
    let endpoints = [];
    for (const route in Routes) {
        endpoints = endpoints.concat(Routes[route]);
    }
    server.route(endpoints);
    server.start();
    server.app.dbConn = database;
}