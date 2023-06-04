const RED = require('node-red');

// Provide the path to your flows.json file
const flowsFile = 'flows.json';

// Configure the Node-RED settings
const settings = {
    httpAdminRoot: '/red',
    httpNodeRoot: '/',
    flowFile: flowsFile,
    userDir: __dirname,
    functionGlobalContext: {} // Add any global context if required
};

// Create a new instance of Node-RED and start the runtime
RED.init(null, settings);
RED.start();
