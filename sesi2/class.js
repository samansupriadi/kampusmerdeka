
//di js yang ada di dalam js adalah method yg lain

class Orang{
	constructor(nama, jurusan, umur, hobi){
		console.log("bikin orang baru")
		this.name = nama
		this.umur = umur
		this.major = jurusan
		this.hobi = hobi
	}
}

let orang = new Orang("saman", "TI", 20, "minum")

console.log(orang)



//menambahkan property lain tidak lewar dari constructor yaitu pakai extends

//class child

class Murid extends Orang{
	constructor(nama, jurusan, umur, hobi){
	super(nama, jurusan, umur, hobi)
	}


}


orang = new Murid("samans", "TI", 20, "minum")
console.log(orang)
