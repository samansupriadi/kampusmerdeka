const fs = require('fs')

//buffer

const buffer = Buffer.alloc(10)
console.log(buffer.write("saman supriadi"))
console.log(buffer.toString('utf-8'))



//stream

let readableStream = fs.createReadStream('./input.txt')

readableStream.on('data', function(data){
	console.log(data)
})

let writeableStream = fs.createWriteStream('./output.txt')
readableStream.pipe(writeableStream)
console.log('Selesai piping')
