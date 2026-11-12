const Crypto = require('crypto-js')
const chave = 'shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
const Funcionario=require('../models/Funcionario')
const cadastrar=async(req,res)=> {
    const {email,senha,nome} = req.body
   if(!email||!senha||!nome){
        return res.status(400).json({message:'preencha tudo caralho'})
    }
    try{
        const senhaCripto = Crypto.AES.encrypt(senha,chave).toString()
        await Funcionario.create({
            nome:nome,
            email:email,
            senha:senhaCripto
     } )
     return res.status(201).json({message:'Cadastro feito com sucesso'})
    }catch(error){
        console.error(error)
        return res.status(400).json({message:'erro no cadastrar'})
    }
}


const consultar=async(req,res)=> {
    const {codFuncionario} = req.params
   if(!codFuncionario){
        return res.status(400).json({message:'preencha tudo caralho'})
    }
    try{
        const consultarr = await Funcionario.findByPk(codFuncionario)
        if(!consultarr){
            return res.status(400).json({message:'funcionario nao existe'})
        }
        const senhaNAocripto = Crypto.AES.decrypt(consultarr.senha,chave).toString(Crypto.enc.Utf8)
        const resultado={
            nome:consultarr.nome,
            email:consultarr.email,
            senha:senhaNAocripto
        }
    
     return res.status(200).json(resultado)
    }catch(error){
        console.error(error)
        return res.status(400).json({message:'erro no consultar'})
    }
}


const deletar=async(req,res)=> {
    const {codFuncionario} = req.params.id
   if(!codFuncionario){
        return res.status(400).json({message:'preencha tudo caralho'})
    }
    try{
        const consultarr = await Funcionario.findByPk()
        if(!consultarr){
            return res.status(400).json({message:'funcionario nao existe'})
        }
       await consultarr.destroy()
    
     return res.status(200).json({message:'Funcionario deletado'})
    }catch(error){
        console.error(error)
        return res.status(400).json({message:'erro no consultar'})
    }
}


module.exports={cadastrar,consultar,deletar}