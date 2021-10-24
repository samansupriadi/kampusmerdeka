const http = require("http")
const port = 3000

http.createServer(function (req, res){
	res.end("Hello World dari node JS server")
}).listen(port)

console.log("Listening on port 3000")
