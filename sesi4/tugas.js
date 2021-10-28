///tutorial https://medium.com/@gustialfianmp/membuat-rest-api-menggunakan-express-js-869e1b86760e

const bodyParser = require("body-parser")
const express = require("express")
const port = 3001
const app = express()
const axios = require('axios')
const fs = require('fs')
//terima data berupa json
app.use(express.json())
//terima data berupa urlencoded
app.use(express.urlencoded({extended : true}))


let db = [
    {
        id: 1,
        name: 'Warior',
        attack: 100,
        defence: 50,
        agility: 30,
        magic: 0,
    },
    {
        id: 2,
        name: 'Mage',
        attack: 10,
        defence: 20,
        agility: 50,
        magic: 100,
    },
    {
        id: 3,
        name: 'Mage',
        attack: 10,
        defence: 20,
        agility: 50,
        magic: 100,
    },
]

//list all user 
app.get('/jobs', (req, res)=>{
    res.send(db)
})

// find user based on name
app.get('/jobs/:nama', (req, res)=>{
    const result = db.filter(data => {
        return data.name.toLocaleLowerCase() === req.params.nama.toLocaleLowerCase()
    })
    return res.json(result)
})

//tambah karakter baru
app.post('/jobs', (req, res)=>{
    const newCharacter = {
        id : db.length + 1,
        name: req.body.name,
        attack: req.body.attack,
        defence: req.body.defence,
        agility: req.body.agility,
        magic: req.body.magic
    }
    db.push(newCharacter)
    return res.json(newCharacter)
})


//hapus char
app.delete('/jobs/:id', (req, res)=>{
    db = db.filter(data =>{
        return data.id !== req.params.id
    })
    return res.json(db)
})

//edit char
app.put('/jobs/:id', (req, res)=>{
    const charakter = db.filter(data =>{
        console.log(data.id)
        return data.id === req.params.id
    })
    


    //validasi apakah charakter yang akan di update ada ?
    if(charakter === null){
        res.json('Not Found')
    }

    const editChar = {
        id : 10,
        name: req.body.name,
        attack: req.body.attack,
        defence: req.body.defence,
        agility: req.body.agility,
        magic: req.body.magic
    }
    db.push(editChar)
    return res.json(editChar)
})


app.listen(port, ()=>{
    console.log("listening on port", port)
})