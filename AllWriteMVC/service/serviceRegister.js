import Tables from "../model/mySQLConnection.js" 
import moment from "moment"


class Registro {
    adiciona(register){
        const sql = "INSERT INTO Register SET ?"
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const acesso = moment().format("YYYY-MM-DD HH:MM:SS")
        const fullRegister = {...register, dataCriacao, acesso}

        Tables.query(sql, fullRegister, (err, results) => {
            if(err){
                console.log(err)
            }else{
                console.log(results)
            }
        })
    }
}

export default new Registro