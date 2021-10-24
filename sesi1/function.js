let nama = "saman"
let gender = "test"

function sebut(nama, gender){
	if(gender === "male"){
		return ("Tuan " +   nama)
	}else if(gender === "female"){
		return ("Nona " + nama)
	}else{
		return `Hallo kak ${nama}`
	}
}

//console.log(sebut(nama, gender))

exports.sebut = sebut
