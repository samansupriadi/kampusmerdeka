const express = require("express")
const app = express()
const port = 3008
const jwt = require("jsonwebtoken")
const uuid = require("uuid")
let data = require('./data.json')
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// start login jwt
app.post("/login", (req, res)=>{
    const user = data.filter(result =>{
        return result.email.toLocaleLowerCase() == req.body.email.toLocaleLowerCase()
    })
    //console.log(user[0])
    const cariIndex = data.findIndex(cari => cari.email == user[0].email)
    //console.log(cariIndex)
    if(data[cariIndex].email == req.body.email && data[cariIndex].password == req.body.password){
        let token = jwt.sign(user[0], 'sangat rahasia')
        res.status(200).json({token : token})
        //console.log("sukses")
        //res.status(200).json({
            //login : "sukses"
       // })
    }else{
        res.status(401).json({
            login : "Salah username atau password"
        })
    }

    
})
// end jwt login


//cek token apa sudah ada apa engga
app.use(function(req, res, next){
    console.log(req.headers.token)
    
    try{
        let decoded = jwt.verify(req.headers.token, 'sangat rahasia')
        console.log(decoded)
        const user = data.filter(result =>{
            return result.email.toLocaleLowerCase() == decoded.email
        })
       //console.log("lalalalalal")
       // console.log(user)

       if(user !== null){
           next()
       }

    }catch(err){
        res.status(401).json({
            pesan : "User tidak teregistrasi"
        })
    }
})


//create user
app.post("/user", (req, res)=>{
    const newUser = {
        id : uuid.v1(),
        email: req.body.email,
        "first_name": req.body.first_name,
        "last_name" : req.body.last_name,
        password : req.body.password,
        avatar : req.body.avatar
    }
    data.push(newUser)
    console.log(data)
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
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
        password : req.body.password,
        avatar : req.body.avatar
    }
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    return res.json(data) 
})


app.get("/user", (req, res)=>{
    res.status(200).json({
        data : data
    })
})

/*
app.get("/user", verifikasi, (req, res)=>{
    jwt.verify(req.token, "secret", (err, dataAuth) => {
        if(err){
            res.status(403)
        }else{
            res.json(data)
        }
    })
})
*/

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
    fs.writeFileSync('./data.json', JSON.stringify(users, null, 2), 'utf-8')
    return res.json(users)
})


app.listen(port, (req, res)=>{
    console.log("Listening on port", port)
})
