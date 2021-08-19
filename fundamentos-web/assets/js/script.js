//var --> Variável de escopo global 
//let --> Variável de escopo local --> Boas práticas
//const --> Variável que não muda
// Variável em JS não precisa do tipo

// Acessar por Tag: getElementByTagName()
// Acessar por Id: getElementById()
// Acessar por Nome: getElementByName()
// Acessar por Classe: getElementByClassName()
// Acessar por Seletor: querySelector() --> Mais utilizado

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

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
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
    }
}
