import Tables from "../config/mySQLConnection.js" 
import bcrypt from "bcryptjs"
import moment from "moment"
import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


class Registro {
    adiciona(register, myFile){
        const sql = "INSERT INTO Register SET ?"
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const acesso = moment().format("YYYY-MM-DD HH:MM:SS")
        register.senha = bcrypt.hashSync(register.senha, 12)
        const fullRegister = {...register, myFile, dataCriacao, acesso}

        Tables.query(sql, fullRegister, (err, results) => {
            if(err){
                myEmitter.emit("SQL", err)
            }else{
                myEmitter.emit("sucessSQL", results)
                console.log(results)
            }
        })
    }
}

const register = new Registro

export {register, myEmitter}