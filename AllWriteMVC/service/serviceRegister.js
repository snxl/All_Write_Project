import Tables from "../config/mySQLConnection.js" 
import bcrypt from "bcryptjs"
import moment from "moment"


class Registro {
    adiciona(register, myFile){
        const sql = "INSERT INTO Register SET ?"
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const acesso = moment().format("YYYY-MM-DD HH:MM:SS")
        register.senha = bcrypt.hashSync(register.senha, 12)
        const fullRegister = {...register, myFile, dataCriacao, acesso}

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