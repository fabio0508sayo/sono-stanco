const resposta =document.getElementById('resposta')
const btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const valores ={
        nome:nome,
        email:email,
        senha:senha
    }
    fetch('http://localhost:3000/cadastrarFuncionario',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(valores)
    })
    .then(res=>res.json())
    .then(dados=>{
        resposta.innerHTML=`<p>${dados.message}</p>`
    })
})
.catch((error)=>{
      resposta.innerHTML=`<p>${error.message}</p>`
})