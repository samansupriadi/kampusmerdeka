  let arr = [
	1, "dua", true, ["array lagi"]
]

//console.log(arr)

arr.push("wahyu")
arr.sort()
//console.log(arr)


let arr2 = [1, 2, 3, 4, 10, 14, 20, 16]
function compare(a, b){
 console.log(a, b)
 return a - b
}
arr2.sort(compare)

console.log(arr2)
