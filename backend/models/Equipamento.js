const { DataTypes } = require("sequelize");
const db = require('../db/conn')

const Equipamento = db.define('equipamento',{
    codEquipamento:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    modelo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fabricante:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    idGerenciamento:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'gerenciamentos',
            key:'codGerenciamento'
        }
    },
},{
    timestamps:false,
    tableName:'equipamentos'
})
module.exports=Equipamento