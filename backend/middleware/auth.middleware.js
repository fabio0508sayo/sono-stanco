const Crypto = require('crypto-js')
const chave = 'shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'

async function syncMiddleware(req,res,next) {
    const token = req.headers['authorization']
   if(!token){
        return res.status(400).json({message:'Erro no token'})
    }
    try{
        const bytes = Crypto.AES.decrypt(token,chave)
        const dadosSemcripto=bytes.toString(Crypto.enc.Utf8)
        if(!dadosSemcripto){
            return res.status(400).json({message:'Dados invalidos'})
        }
        const payload = JSON.parse(dadosSemcripto)
        if(Date.now() > payload.expirar){
            return res.status(400).json({message:'Tempo expirou'})
        }
        req.codFuncionario=payload.codFuncionario
        next()
    }catch(error){
        console.error(error)
        return res.status(400).json({message:'erro no middleware'})
    }
}
module.exports=syncMiddleware