const { Pool } = require("pg")

const db = new Pool({
    user: "root",
    password: "root",
    database: "h8",
    host: "172.21.0.2",
    port: 5432
})


module.exports = db