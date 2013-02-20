var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "rext/plain"});
	response.write("Hello World\n");
	response.end();
}).listen(8888);
