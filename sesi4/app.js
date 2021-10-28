const { response } = require("express")
const express = require("express")
const port =  3001
const app = express()

//menerima 2 parameter, url path, callback
//app.get(url, callback, callback, calback)
/*
app.get('/', (request, response)=>{
    console.log("masuk get /")
    response.send("hallo from expressJS")
})

app.post('/', (request, response)=>{
    console.log("masuk get /")
    response.send("hallo from expressJS")
})
*/

const fn1 = (req, res, next) => {
    console.log("masuk get /")
    next()
    //res.send("hallo from expressjs")
}

const fn2 = (req, res) => {
    console.log("masuk get ke 2")
    res.send("hallo from expressjs")
}

app.get('/', fn1, fn2)

app.post('/', fn1, fn2)

app.listen(port, ()=>{
    console.log("Listening on port", port)
})