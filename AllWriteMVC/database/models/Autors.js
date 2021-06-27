module.exports = (sequelize, DataTypes) => {
    const Autores = sequelize.define("Autores", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
           },
           acceptContact:{
             type: DataTypes.INTEGER,
             allowNull:true
           },
           register_id:{
             type:DataTypes.INTEGER,
             allowNull:true,
           }
    }, {
        tableName: "autors",
        timestamps: false
    })

    Autores.associate = (model)=>{
        Autores.belongsTo(model.Registro, {
            foreignKey: "register_id",
            as: "Registros_register"
        })

        Autores.hasOne(model.Biblioteca, {
            foreignKey: "register_id",
            as: "Registros_library"
        })
    }

    return Autores
}
