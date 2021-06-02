import sequelize from "../database/models/index.js"

import Register from "../database/models/Register.js"

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

        res.json(data)

    }
}

export default teste