function beliBubur(){
	console.log("Saya beli bubur")

}

function beliKetoprak(fn){
	console.log("Saya beli ketoprak")
	fn()
}


beliKetoprak(beliBubur)
