const { DataTypes } = require("sequelize");
const db = require('../db/conn')

const Gerenciamento = db.define('gerenciamento',{
    codGerenciamento:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    cpf:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps:false,
    tableName:'gerenciamentos'
})
module.exports=Gerenciamento