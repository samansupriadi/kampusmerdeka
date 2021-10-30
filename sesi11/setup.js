const db = require("./db")

db.query(`
    create table if not exists "Users"(
        id serial primary key,
        name varchar
    );
`, (err, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res.rows)
    }
})





module.exports = db