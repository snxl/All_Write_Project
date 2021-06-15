import sequelize from "../database/models/index.js"

class Registro {
    async adiciona(register){

        const imageRoute = "undefined"

        const credential = 0

        const fullRegister = {...register, imageRoute, credential}

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
