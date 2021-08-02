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
        allowNull:true
    },
    route:{
      type: DataTypes.VIRTUAL,
      get:function(){
        return `https://localhost:3600/files/${this.imageRoute}`
      }
    },
    credential:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
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

      Register.hasMany(model.Livros, {
        onDelete:"SET NULL",
        hooks:true,
        foreignKey: "id_user",
        as: "my_books",
      })

    }

    return Register
}

