
module.exports = (sequelize, DataTypes) => {
    const UserBooks = sequelize.define("UserBooks", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
           },

           id_user:{
             type:DataTypes.INTEGER,
             allowNull:true,
           },

           id_library:{
            type:DataTypes.INTEGER,
            allowNull:true,
          }
    }, {
        tableName: "userBooks",
        timestamps: false
    })

    /*UserBooks.associate = (models)=>{
        UserBooks.belongsTo(models.Register, {
            foreignKey: "id_user",
            as: "Usuarios_user"
        })
        UserBooks.belongsTo(models.Library, {
            foreignKey: "id_library",
            as: "Biblioteca_library"
        })

    }*/

    return UserBooks
}
