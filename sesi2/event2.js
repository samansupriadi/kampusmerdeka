const EventEmitter = require("events")

class MyEmitter extends EventEmitter{}

myEmitter = new MyEmitter()

//listner 1

let listener1 = function listener1(){
		console.log("Listener1 telah di buat")
	}


//listener2

let listener2 = function listener2(){
	console.log("Listener2 telah di buat")
}


myEmitter.on("connection", listener1)
myEmitter.on("connection", listener2)


let eventListeners = EventEmitter.listenerCount(myEmitter, "connection")


console.log(eventListeners + " Listeners yang berhubungan dengan key connection")


myEmitter.emit("connection")
