module.exports = (sequelize, DataTypes) => {
    const Autores = sequelize.define("Biblioteca", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          id_user:{
            type: DataTypes.INTEGER,
            references: {model: "register", key: "id"},
            allowNull:false,
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            field: "id_user"
          },
          titulo: {
              type: DataTypes.STRING,
              allowNull:false,
          },
          sinopse: {
              type: DataTypes.STRING(1000),
          },
          image:{
              type: DataTypes.STRING,
              allowNull:false
          },
          pdf:{
            type: DataTypes.STRING,
            allowNull:false
          },
          createdAt:{
            type: DataTypes.DATE,
            allowNull:false
          },
          updatedAt:{
            type: DataTypes.DATE,
            allowNull:false
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
