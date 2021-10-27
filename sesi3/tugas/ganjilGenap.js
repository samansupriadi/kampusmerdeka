let orang = [
    { name: "Yusuf",no_absen : "injs-01"},
    { name: "Wahyu",no_absen : "injs-02" },
    { name: "Hafid",no_absen : "injs-03"},
    { name: "Raka" ,no_absen : "injs-04"},
    { name: "Rizky",no_absen : "injs-05" },
    { name: "Yolan",no_absen : "injs-06"},
  ]

//cek genap

function cekGenap(number){
    if(number.no_absen[6] % 2 === 0){
        return true
    }
}

function cekGanjil(number){
    if(number.no_absen[6] % 2 === 1){
        return true
    }
}

const even = orang.filter(cekGenap)
console.log(even)

const odd = orang.filter(cekGanjil)
console.log(odd)