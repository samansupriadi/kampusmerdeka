const http = require("http")
const port = 3000
const fs = require("fs")


http.createServer(function(request, response){
	//konvensi => kita ngabalikin itu bukan string biasa
	// tapi berupa html
	response.writeHead(200, {
		'Content-Type':'text/html'
	})
	let html = fs.readFileSync("./index.html", "utf-8")
	response.write(html)
	response.end()
}).listen(port)


console.log("Listening on port 3000")
