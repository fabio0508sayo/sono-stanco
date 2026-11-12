const Equipamento = require('./Equipamento')
const Funcionario = require('./Funcionario')
const Gerenciamento = require('./Gerenciamento')
const Inspecao = require('./Inspecao')


Gerenciamento.hasMany(Equipamento,{
    as:'equipamentoGerencia',
    foreignKey:'idGerenciamento',
    onDelete:'CASCADE'
})
Equipamento.belongsTo(Gerenciamento,{
    as:'gerenciaequipamento',
    foreignKey:'idGerenciamento',
        allowNull:false
})


Equipamento.hasMany(Inspecao,{
    as:'inspecaoEquipamento',
    foreignKey:'idEquipamento',
    onDelete:'CASCADE'
})
Inspecao.belongsTo(Equipamento,{
    as:'equipamentoinspecao',
    foreignKey:'idEquipamento',
        allowNull:false
})
module.exports={Inspecao,Equipamento,Gerenciamento,Funcionario}