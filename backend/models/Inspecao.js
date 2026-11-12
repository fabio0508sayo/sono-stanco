const { DataTypes } = require("sequelize");
const db = require('../db/conn')

const Inspecao = db.define('inspecao',{
    codInspecao:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    idEquipamento:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'equipamentos',
            key:'codEquipamento'
        }
    },
    status:{
        type:DataTypes.ENUM('PENDENTE','REALIZADA'),
        allowNull:false,
    },
    data:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
},{
    timestamps:false,
    tableName:'inspecaos'
})
module.exports=Inspecao