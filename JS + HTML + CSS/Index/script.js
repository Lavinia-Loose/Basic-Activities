// corresponde ao index.html

// ------------------------FUNÇÕES GERAIS------------------------ //

function togglePopup(input, label) {
    // mostrar ou esconder o popup de campo obrigatório
    input.addEventListener('focus', () => {
        label.classList.add('popup');
    });
    
    input.addEventListener('blur', () => {
            label.classList.remove('popup');
    });
}

function styleCorrectInput (input, helper) {
    helper.classList.remove('visible');
    input.classList.remove('error');
    input.classList.add('correct');
}

function styleIncorrectInput (input, helper) {
    helper.classList.add('visible');
    helper.classList.add('error');
    helper.classList.remove('correct');
}

// -----------------------VALIDAÇÃO USERNAME------------------------- //

let usernameInput = document.getElementById('username');
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');

togglePopup(usernameInput, usernameHelper)

//Validar valor do input
usernameInput.addEventListener("change", (e) => {
     let valor = e.target.value

     if (valor.length < 3 || valor.length > 20) {
         styleIncorrectInput(usernameInput, usernameHelper);
         usernameHelper.textContent = "O nome de usuário deve ter entre 3 e 20 caracteres.";
         correctInputs.username = false
         styleIncorrectInput(usernameInput, usernameHelper);
     } else {
         styleCorrectInput(usernameInput, usernameHelper);
         correctInputs.username = true
     }
})

// -----------------------VALIDAÇÃO EMAIL------------------------- //

let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

togglePopup(emailInput, emailLabel)

//Validar valor do input
emailInput.addEventListener("change", (e) => {
     let valor = e.target.value

     if (!valor.includes('@') && valor.includes(".com")) {
         styleCorrectInput(emailInput, emailHelper);
         correctInputs.email = true
     } else {
        emailHelper.innerText("Por favor, insira um email válido!")
         styleIncorrectInput(emailInput, emailHelper);
         correctInputs.email = false
     }
})

// -----------------------VALIDAÇÃO SENHA------------------------- //

let passwordInput = document.getElementById('password');
let passwordLabel = document.querySelector('label[for="password"]');
let passwordHelper = document.getElementById('password-helper');

togglePopup(passwordInput, passwordLabel)

//Validar valor do input
passwordInput.addEventListener("blur", (e) => {
     let valor = e.target.value

     if (valor.length < 3 || valor.length > 20) {
         styleIncorrectInput(passwordInput, passwordHelper);
         passwordHelper.innerText = "A senha deve ter entre 3 e 20 caracteres.";
         styleIncorrectInput(passwordInput, passwordHelper);
         correctInputs.password = false
     } else {
         styleCorrectInput(passwordInput, passwordHelper);
         correctInputs.password = true
     }
})

// ------------------- VALIDAÇÃO CONFIRMAR SENHA --------------------- //

let confirmPasswordInput = document.getElementById('confirmPassword');
let confirmPasswordLabel = document.querySelector('label[for="confirmPassword"]');
let confirmPasswordHelper = document.getElementById('confirmPassword-helper');

togglePopup(passwordInput, passwordLabel)

//Validar valor do input
confirmPasswordInput.addEventListener("blur", (e) => {
     let valorConfirm = e.target.value

     if (valorConfirm == passwordInput.value) {
         styleIncorrectInput(confirmPasswordInput, confirmPasswordHelper);
         passwordHelper.innerText = "As senhas devem ser iguais!";
         styleIncorrectInput(confirmPasswordInput, confirmPasswordHelper);
         correctInputs.confirmPassword = false
     } else {
         styleCorrectInput(confirmPasswordInput, confirmPasswordHelper);
         correctInputs.confirmPassword = true
     }
})

// --------------------- EVITAR ENVIO DO FORM ----------------------- //

let btnSubmit = document.querySelector('button[type="submit"]')
let submitHelper = document.getElementById('submit-helper');
let correctInputs = {
    username: false,
    email: false,
    password: false,
    confirmPassword: false
}

btnSubmit.addEventListener("click", (e) => {
    if(correctInputs.username == false || correctInputs.email == false || correctInputs.password == false || correctInputs.confirmPassword == false){
        e.preventDefault()
        alert("Todos os Campos Obrigatórios Devem Ser Preenchidos!")
    } else{
        alert("Formulário Enviado com Sucesso!")
    }
})
