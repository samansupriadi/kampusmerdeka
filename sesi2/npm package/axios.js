const axios = require('axios')

//console.log(axios)


let hasil = axios({
	method: 'get',
	url: 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'
})



//promise - mengambil data bisa berhasil atau gagal


let janji = new Promise(function (resolve, reject){
	resolve('Ditepati')
	reject ('direject')
})


gojek
