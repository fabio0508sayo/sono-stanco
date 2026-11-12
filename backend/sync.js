const {Equipamento,Funcionario,Gerenciamento,Inspecao}=require('./models/rel')
const conn = require('./db/conn')
async function syncDataBase() {
    try{
        await conn.sync({force:true})
        console.log('sincronizando as tabelas')
    }catch(error){
        console.error(error)
    }finally{
        await conn.close()
        console.log('fechando tabelas')

    }
}
syncDataBase()