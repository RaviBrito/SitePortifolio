let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let comentario = window.document.getElementById('comentario')
let dicas = window.document.getElementById('dicas')

nome.style.width = '100%'
email.style.width = '100%'
comentario.style.width = '100%'
dicas.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }

    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') == -1) {
            txtNome.innerHTML = 'E-mail inválido'
            txtNome.style.color = 'red'
        } else {
            txtNome.innerHTML = 'E-mail válido'
            txtNome.style.color = 'green'
        }
    }
    function validaTelefone() {
        let telefone = document.querySelector('#telefone')
        if (telefone.value.length < 9) {
            txtNome.innerHTML = 'Telefone inválido'
            txtNome.style.color = 'red'
        } else {
            txtNome.innerHTML = 'Telefone válido'
            txtNome.style.color = 'green'
        }
    }

    function validaMensagem() {
        let mensagem = document.querySelector('#mensagem')

        if(mensagem.value.length < 10){
            mensagem.innerHTML = 'Mensagem muito pequena.'
        }
    }
}


