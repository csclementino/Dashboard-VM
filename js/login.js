
document.querySelector('form').addEventListener('submit', async function(e) {
e.preventDefault(); // Impede o comportamento padrão do formulário

const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();

// Remove mensagens de erro antigas, se houver
let erroDiv = document.getElementById('erro-login');
if (erroDiv) erroDiv.remove();

try {
    const resposta = await fetch('http://127.0.0.1:8000/api/admin', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
    });

    const dados = await resposta.json();

    if (dados.sucesso) {
    // Salva o ID_CCO no sessionStorage para uso posterior
    sessionStorage.setItem('id_cco', dados.id_cco);
    sessionStorage.setItem('nome_cco', dados.nome_cco);
    sessionStorage.setItem('logado', 'true');
    // Redireciona para overview.html
    window.location.href = 'overview.html';
    } else if (dados.error) {
    exibirErro(dados.error);
    } else {
    exibirErro('Erro inesperado ao tentar logar.');
    }
} catch (erro) {
    exibirErro('Erro na conexão com o servidor.');
}

function exibirErro(msg) {
    const botao = document.querySelector('.button-send');
    const erroMsg = document.createElement('div');
    erroMsg.id = 'erro-login';
    erroMsg.style.color = 'while';
    erroMsg.style.marginTop = '10px';
    erroMsg.textContent = msg;
    botao.parentNode.appendChild(erroMsg);
}
});

const idCco = sessionStorage.getItem('id_cco');
console.log('id_cco:', idCco);

