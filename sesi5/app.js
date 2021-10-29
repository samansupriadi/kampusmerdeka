const express = require('express')
const { nextTick } = require('process')
const port = 3000
const app = express()


app.use(express.static("public"))

app.get('/', (req, res, next)=>{
   next()
}, (req, res) =>{
    console.log("Endpont handler")
    res.sendFile("public/index.html", {root: __dirname})
})


app.listen(port, ()=>{
    console.log("Listening on port", port)
}) 