module.exports = (sequelize, DataTypes) => {
    const Livros = sequelize.define("Livros", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user:{
          type: DataTypes.INTEGER,
          references: {model: "Registro", key: "id"},
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          allowNull:true,
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
        imageRoute:{
          type: DataTypes.VIRTUAL,
          get:function(){
            return `https://localhost:3600/files/${this.image}`
          }
        },
        pdf:{
          type: DataTypes.STRING,
          allowNull:false
        },
        pdfRoute:{
          type: DataTypes.VIRTUAL,
          get: function(){
            return `https://localhost:3600/files/${this.pdf}`
          }
        },
        category:{
          type: DataTypes.STRING,
          allowNull:false
        }
        },{
            tableName: "library",
            timestamps: true
    })

    Livros.associate = (models)=>{
      Livros.belongsTo(models.Registro, {
        foreignKey: "id_user",
        as:"autor",
        onDelete:"SET NULL"
      })
    }


    return Livros
}
