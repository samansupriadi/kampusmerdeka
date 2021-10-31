const express = require("express")
const app = express()
const port = 3008
const jwt = require("jsonwebtoken")
const uuid = require("uuid")
let data = require('./data.json')

app.use(express.json())
app.use(express.urlencoded({extended: true}))



//verifikasi jwt
function verifikasi(req, res, next){
    //console.log(req.headers)
    let getHeader = req.headers["auth"]
    if(typeof getHeader !== "undefined"){
        req.token = getHeader
        next()
    }else{
        res.status(403)
    }
}


jwt.sign(
    {
        data : data
    },
    "secret",
    (err, token) => {
        console.log(token)
    }
)

//create user
app.post("/user", (req, res)=>{
    const newUser = {
        id : uuid.v1(),
        email: req.body.email,
        "first_name": req.body.first_name,
        "last_name" : req.body.last_name,
        avatar : req.body.avatar
    }
    data.push(newUser)
    res.status(200).json({
        data: data
    })
})

//update / edit user
app.put("/user/:id", (req, res)=>{
    //cari dulu data yang akan di edit nya
    const user = data.filter(result => {
        //console.log(result.id)
        return  result.id == req.params.id
    })
    
 //verifikasi data nya ada
 if(user === null){
     res.json({
         pesan : "Data ID user Tidak di temukan"
     })

 }
 //cari index user bersangkutan  
 const cariIndex = data.findIndex(cari => cari.id == user[0].id)

   //console.log(data[cariIndex].first_name)
    //replace data di array nya
    data[cariIndex] = {
        id: user[0].id,
        email: req.body.email,
        "first_name": req.body.first_name,
        "last_name" : req.body.last_name,
        avatar : req.body.avatar
    }
    
    return res.json(data) 
})


app.get("/user", verifikasi, (req, res)=>{
    jwt.verify(req.token, "secret", (err, dataAuth) => {
        if(err){
            res.status(403)
        }else{
            res.json(data)
        }
    })
})


//find spesifik user
app.get('/user/:nama', (req, res)=>{
    //console.log(req.params.nama)
    const user = data.filter(result =>{
        return result.first_name.toLocaleLowerCase() == req.params.nama.toLocaleLowerCase()
    })
    res.send(user)
})

//hapus user
app.delete("/user/:id", (req, res)=>{
    const users = data.filter(result =>{
        return result.id != req.params.id
    })
    return res.json(users)
})


app.listen(port, (req, res)=>{
    console.log("Listening on port", port)
})
