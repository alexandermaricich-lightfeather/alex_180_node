const GlobalConfig = require('./src/config/global');
const ExpressServer = require('./src/rest');

ExpressServer.start(process.env.PORT || GlobalConfig.DEFAULT_PORT);