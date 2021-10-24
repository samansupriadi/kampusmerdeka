let nama = "saman"
let gender = "male"

function sebut(nama, gender){
	if(gender === "male"){
		return ("Tuan " +   nama)
	}else{
		return ("Nona " + nama)
	}
}

console.log(sebut(nama, gender))
