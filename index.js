// A simple http server
const http = require('http');
const port = 4000;

const server = http.createServer(function(request,response) {
    response.writeHead(200, { 'Content-Type' : 'text/html'})
    response.write("<h1>HA</h1>");
    response.end();
});
server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
})



