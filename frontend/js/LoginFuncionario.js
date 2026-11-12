const resposta =document.getElementById('resposta')
const btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const valores ={
        email:email,
        senha:senha
    }
    fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(valores)
    })
    .then(res=>res.json())
    .then(dados=>{
                resposta.innerHTML=`<p>${dados.message}</p>`
    if(dados.token){
        localStorage.setItem('token',dados.token)
        localStorage.setItem('nome',dados.nome)
        location.href='../html/home.html'
        }
    })
})
.catch((error)=>{
      resposta.innerHTML=`<p>${error.message}</p>`
})