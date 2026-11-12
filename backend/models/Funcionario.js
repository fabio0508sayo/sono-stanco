const { DataTypes } = require("sequelize");
const db = require('../db/conn')

const Funcionario = db.define('funcionario',{
    codFuncionario:{
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
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    timestamps:false,
    tableName:'funcionarios'
})
module.exports=Funcionario