module.exports = (sequelize, DataTypes) => {
    const Livros = sequelize.define("Livros", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(50),
            allowNull:false,
        },  
        subtitulo: {
            type: DataTypes.STRING(50),
            unique:true          
        },  
        sinopse: {
            type: DataTypes.STRING(1000),
        },
        
        imageRoute:{
            type: DataTypes.STRING(500),
            allowNull:false       
        }
        },{
            tableName: "livros",
            timestamps: false
        })


    return Livros
}
