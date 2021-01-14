const pinger = require('minecraft-pinger')
var argv = require('minimist')(process.argv.slice(2));

pinger.ping(argv.h, argv.p, (error, result) => {
    if (error) {
        return console.error(error)
    }
    else {
        return;
    }
    
  })