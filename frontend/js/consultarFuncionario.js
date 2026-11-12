const resposta = document.getElementById('resposta')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const codFuncionario = document.getElementById('codFuncionario').value
    const token = localStorage.getItem('token')

    fetch(`http://localhost:3000/consultar/${codFuncionario}`, {
        method: 'GET',
        headers: {
            'Authorization': token // Envia o token caso a rota seja privada
        }
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = `
       <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Senha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${dados.nome}</td>
                    <td>${dados.email}</td>
                    <td>${dados.senha}</td>
                </tr>
            </tbody>
        </table>`
    })
    .catch((error) => {
        resposta.innerHTML = `<p>${error.message}</p>`
    })
})