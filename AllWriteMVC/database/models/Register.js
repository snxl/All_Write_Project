const bcrypt = require("bcryptjs")

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
        allowNull:false
    },
    password_hash:{
      type: DataTypes.VIRTUAL
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
    }
    },{
      tableName: "register"
    } )

  //   Register.addHook("beforeSave", async Registro => {

  //     if(Registro.password_hash) Registro.password_hash = await bcrypt.hash(user.password, 12)

  // })

    Register.associate = (model)=>{
        Register.hasOne(model.Autores,{
            foreignKey: "register_id",
            as:"autors"
        })
    }

    return Register
}
