import sequelize from "../database/models/index.js"
import crypt from "crypto"

const teste = {
    findAll: async (req, res) => {

        const data = await sequelize.Autores.findAll({
            include:[{
                model: sequelize.Registro,
                as: "Registros_register",
                required: true
            },{
                model:sequelize.Biblioteca,
                as:"Registros_library",
                required:true
            }]
        })

        const Decrypt = crypt.Decipher()

        res.json(data)

    },

    findOne: async (req, res) =>{
        const data = await sequelize.Registro.findOne({
            where:{
                id:1
            },
            include:[{
                model:sequelize.Autores,
                required:true,
                as:"autors"
            }]
        })

        res.json(data)
    }
}

export default teste
