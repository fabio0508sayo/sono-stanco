const nomeFuncionario = document.getElementById('nomeFuncionario')
const btn = document.getElementById('btn')

const token = localStorage.getItem('token')
const nome = localStorage.getItem('nome')
if(!token){
    window.location.href='../index.html'
}
nomeFuncionario.innerText=nome
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.clear()
    window.location.href='../index.html'
})