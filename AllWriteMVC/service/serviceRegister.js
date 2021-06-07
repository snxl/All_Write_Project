import sequelize from "../database/models/index.js"
import bcrypt from "bcryptjs"
import moment from "moment"


class Registro {
    async adiciona(register){
        
        const createDate = moment().format("YYYY-MM-DD HH:MM:SS")

        const lastAcess = moment().format("YYYY-MM-DD HH:MM:SS")

        register.password = bcrypt.hashSync(register.password, 12)

        const imageRoute = "undefined"

        const credential = 0

        const fullRegister = {...register, imageRoute, credential, createDate, lastAcess}

        const checkEmail = await sequelize.Registro.findOne({
            where:{
                email: register.email
            }
        })

        const checkUser = await sequelize.Registro.findOne({
            where:{
                user: register.email
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
