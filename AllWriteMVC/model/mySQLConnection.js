import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "example",
    database: "register-allwrite"
})

export default connection