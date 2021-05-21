import sequelize from "../database/models/index.js"
import bcrypt from "bcryptjs"
import moment from "moment"


class Registro {
    async adiciona(register, myFile){
        const sql = "INSERT INTO Register SET ?"
        
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")
        const acesso = moment().format("YYYY-MM-DD HH:MM:SS")

        register.senha = bcrypt.hashSync(register.senha, 12)

        const fullRegister = {...register, myFile, dataCriacao, acesso}

        const checkEmail = await sequelize.Registro.findOne({
            where:{
                email: register.email
            }
        })

        const checkUser = await sequelize.Registro.findOne({
            where:{
                usuario: register.email
            }
        })

        if(!checkEmail && !checkUser){
            const insert = await sequelize.Registro.create(fullRegister)

            return insert
        }else{
            return false 
        }
    }
}

const register = new Registro

export default register