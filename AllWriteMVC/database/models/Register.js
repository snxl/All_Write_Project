module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define("Registro", {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user: {
            type: DataTypes.STRING(50),
            allowNull:true,
            unique:true
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull:true
        },
        email:{
            type: DataTypes.STRING(90),
            allowNull:true, 
            unique:true
        },
        password:{
            type: DataTypes.STRING(200),
            allowNull:true
        },
        imageRoute:{
            type: DataTypes.STRING(500),
            allowNull:false
        },
        credential:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createDate:{
            type: DataTypes.DATE,
            allowNull:true
        },
        lastAcess:{
            type: DataTypes.DATE,
            allowNull:true
        }
    }, {
        tableName: "Register",
        timestamps: false
    })
    return Register
}
