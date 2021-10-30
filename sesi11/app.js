const db = require("./db")
const express = require("express")
const { compile } = require("ejs")
const app = express()
const port = 5000
const User = require("./models/user")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
//ejs
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.render("index", {project : "Belajar Rest Api"})
    //res.json({
     //   project: "Belajar rest api"
    //})
})
//create
app.post('/users', User.create)

//read
app.get("/users", User.read)

app.listen(port, ()=>{
    console.log("listening on port", port)
})