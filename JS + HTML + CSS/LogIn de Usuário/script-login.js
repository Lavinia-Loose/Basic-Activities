// ------------------ CORRESPONDE AO LOGIN.HTML ------------------- //
let titulo = document.querySelector("h2")

// Primeira Interação do Usuário //
let loginUsuario = document.getElementById("login-usuario")
let errorTextUsuario = document.querySelector(".error-text")
loginUsuario.classList.add("error")
errorTextUsuario.classList.add("visible")

// Segunda Interação do Usuário //
let loginPassword = document.getElementById("login-password")
let errorTextPassword = document.querySelector(".error-text")
loginPassword.classList.add("error")
errorTextPassword.classList.add("visible")

// --------------------- EVITAR ENVIO DO FORM ----------------------- //

let btnSubmitLogin = document.querySelector('button[type="submit"]')
let submitHelperLogin = document.getElementById('submit-helper');
let correctInputsLogin = {
    usernameLogin: false,
    passwordLogin: false
}

btnSubmit.addEventListener("click", (e) => {
    if(correctInputs.username == false || correctInputs.password == false ){
        e.preventDefault()
        alert("Todos os Campos Obrigatórios Devem Ser Preenchidos!")
    } else{
        alert("Formulário Enviado com Sucesso!")
    }
})
