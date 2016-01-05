var http = require('http');
var callModules = require('./callModules');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(callModules.accountBalance());
    response.write(callModules.firstInSecond(100, 1000000));
    response.end();

}).listen(3000);

console.log('running on port 3000');
