module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define("Registro", {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuario: {
            type: DataTypes.STRING(50),
            allowNull:true,
            unique:true
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull:false,
            unique:true
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull:true, 
        },
        senha:{
            type: DataTypes.STRING(200),
            allowNull:true
        },
        estado:{
            type: DataTypes.STRING(20),
            allowNull:true
        },
        cidade:{
            type: DataTypes.STRING(50),
            allowNull:true
        },
        myFile:{
            type: DataTypes.STRING(500),
            allowNull:false
        },
        dataCriacao:{
            type: DataTypes.DATE,
            allowNull:true
        },
        acesso:{
            type: DataTypes.DATE,
            allowNull:true
        }
    }, {
        tableName: "Register",
        timestamps: false
    })
    return Register
}
