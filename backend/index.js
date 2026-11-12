const express = require('express')
const app = express()
const cors = require('cors')

const host = 'localhost'
const port = 3000

const funcionario = require('./controller/funcionario.controller')
const authController=require('./controller/auth.controller')
const authmiddleware=require('./middleware/auth.middleware')
const conn = require('./db/conn')
//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
//rotas publicas
app.post('/cadastrarFuncionario',funcionario.cadastrar)
app.post('/login',authController.login)
//rotas Privadas
app.use(authmiddleware)
app.get('/consultar/:codFuncionario',funcionario.consultar)

//server
conn.sync()
.then(()=>{
    app.listen(port,host,()=>{
        console.log('Server rodando')
    })
})
.catch((error)=>{
    console.error(error)
})