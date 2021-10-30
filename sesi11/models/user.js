
const db = require("../db")
class User{
   static read (req, res){
    db.query(`select * from "Users";`, (err, result)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json({
                msg : "Sukses",
                data : result.rows
            })
        }

    })

   }

   static create (req, res){

    let input = req.body.name
    console.log(input)
    db.query(`insert into "Users" ("name") values ('${input}')`, (err, result)=>{
        if(err){
            //console.log(err)
            res.json(err)
        }else{
            res.status(201).json({
                msg: "Sukses",
                data: result.rows
            })
        }
    })

}
}



module.exports = User