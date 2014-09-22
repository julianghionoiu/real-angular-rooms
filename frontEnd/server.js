var startStopDaemon = require('start-stop-daemon');

var startApp = function() {
    var http = require('http');
    var finalhandler = require('finalhandler');
    var serveStatic = require('serve-static');

    var serve = serveStatic("./");

    var server = http.createServer(function(req, res){
        var done = finalhandler(req, res)
        serve(req, res, done)
    });

    server.listen(3000);
}


// connection configuration to pass on to couchbase.connect(). Note that
// while connecting with the server we are also opening the beer-sample
// bucket.

var daemonConfig = {
    outFile: './log/appOutFile.log',
    errFile: './log/appErrFile.log',
    max: 1 //the script will run 1 times at most
};

// Check if this file has been loaded directly from node. We don't want people require-ing this file.
if (require.main == module) {
    startStopDaemon(daemonConfig, function() {
        console.log('Starting application');
        startApp();
    });
}