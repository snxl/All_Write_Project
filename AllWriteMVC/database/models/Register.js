const bcrypt = require("bcryptjs")
const database = require("./index.js")

module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define("Registro",{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(200),
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING(200),
        allowNull:true
        //true enquanto campo de senha virtual existir
    },
    password_hash:{
      type: DataTypes.VIRTUAL,
      allowNull: false
    },
    imageRoute:{
        type: DataTypes.STRING(500),
        allowNull:false
    },
    credential:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull:false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull:false
    },
    bio:{
      type: DataTypes.STRING(1000),
      allowNull:true
    }
    },{
      tableName: "register"
    } )

    Register.addHook("beforeSave", async Registro => {

      if(Registro.password_hash) Registro.password = await bcrypt.hash(Registro.password_hash, 12)

    })

    Register.associate = (model)=>{
        Register.hasOne(model.Autores,{
            foreignKey: "register_id",
            as:"autors"
        })
    }

    // Register.addHook("afterCreate", async Registro =>{
    //   await database.Autores.create({
    //     acceptContact: 0,
    //     register_id: Registro.id
    //   })
    // })

    return Register
}

