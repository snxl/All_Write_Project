import app from "../app.js"
import connection from "../model/mySQLConnection.js"
import Tables from "../model/tables.js"



const port = process.env.PORT || '3000'
app.set('port', port)

connection.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log("server connect")

        Tables.init(connection)
        
        app.listen(port, () => console.log(`server running: ${port}`))
    }
})

