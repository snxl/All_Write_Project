module.exports = (sequelize, DataTypes) => {
    const Autores = sequelize.define("Biblioteca", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
           },
           register_id:{
             type:DataTypes.INTEGER,
             allowNull:false,
           }
        }, {
            tableName: "library",
            timestamps: false
        })

    // Autores.associate = (model)=>{
    //     Autores.belongsTo(model.Registro, {
    //         foreignKey: "register_id",
    //         as: "Registros_library"
    //     })
    // }

    return Autores
}
