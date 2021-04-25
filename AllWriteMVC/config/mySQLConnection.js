import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Shine130102",
    database: "register-allwrite"
})

export default connection