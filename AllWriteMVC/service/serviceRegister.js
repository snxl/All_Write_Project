import Tables from "../model/tables.js" 

class Registro {
    adiciona(register){
        const sql = "INSERT INTO Register SET ?"

        Tables.query(sql, register, (err, results) => {
            if(err){
                console.log(err)
            }else{
                console.log(results)
            }
        })
    }
}

export default new Registro