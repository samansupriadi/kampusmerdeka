//sync => proses yang prosedural berurutan tidak akan saling mendahului
//aynsc => proses bisa lompat ke proses selanjut nya, dan ketika prosess 
//yang di lewat selanjutnya sudah selesai bisa di panggil lagi callback

setTimeout(()=>{
    console.log("async")
}, 0)

console.log("text setelah async1")
console.log("text setelah async2")