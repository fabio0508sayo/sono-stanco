const Crypto = require('crypto-js')
const chave = 'shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
const Funcionario=require('../models/Funcionario')
const login=async(req,res)=> {
    const {email,senha} = req.body
   if(!email||!senha){
        return res.status(400).json({message:'preencha tudo caralho'})
    }
    try{
        const consultar = await Funcionario.findOne({where:{email:email}})
        if(!consultar){
            return res.status(400).json({message:'Nao existe essa porra desse funcionario'})
        }
        const bytes = Crypto.AES.decrypt(consultar.senha,chave)
        const dadosSemcripto=bytes.toString(Crypto.enc.Utf8)
        if(dadosSemcripto!==senha){
            return res.status(400).json({message:'Dados invalidos'})
        }
        const payload = {
            codFuncionario:consultar.codFuncionario,
            expirar:Date.now() + (4*60*60*1000)
        }

        const token=Crypto.AES.encrypt(JSON.stringify(payload),chave).toString()
     return res.status(200).json({
        message:'login feito com sucesso',
        token:token,
        nome: consultar.nome
     })
    }catch(error){
        console.error(error)
        return res.status(400).json({message:'erro no middleware'})
    }
}
module.exports={login}