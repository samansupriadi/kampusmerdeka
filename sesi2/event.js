//include module events
const EventEmitter = require("events")

//membuat class dengan extend module events
class MyEmitter extends EventEmitter{}

//membuat object baru dari  class myEmiter
const myEmitter = new MyEmitter();

//membuat listener baru dengan key "event"
myEmitter.on("event", ()=>{
	console.log("Hallo, Selamat Datang!!")
})

myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")

//event hanya boleh di panggil satu kali dengan menggunkan once

const myEmitter2 = new MyEmitter()

myEmitter2.once("event", ()=>{
	console.log("halo selamat datang event2")
})

myEmitter2.emit("event")
myEmitter2.emit("event")
myEmitter2.emit("event")


//error events

const myEmitter3 = new MyEmitter()

myEmitter3.on("error", err =>{
	console.log("Telah terjadi error!! Silahkan cek kembali")
})

myEmitter3.emit("error", new Error("whoopssss"))




