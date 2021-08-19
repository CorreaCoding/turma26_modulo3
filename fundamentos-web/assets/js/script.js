//var --> Variável de escopo global 
//let --> Variável de escopo local --> Boas práticas
//const --> Variável que não muda
// Variável em JS não precisa do tipo

// Acessar por Tag: getElementByTagName()
// Acessar por Id: getElementById()
// Acessar por Nome: getElementByName()
// Acessar por Classe: getElementByClassName()
// Acessar por Seletor: querySelector() --> Mais utilizado

//Variáveis devem ser declaradas por boas práticas
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

//Para aumentar o campo de Nome e Email
nome.style.width = '100%'
email.style.width = '100%'

//Só carrega o if quando chama a função
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapazoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapanormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}