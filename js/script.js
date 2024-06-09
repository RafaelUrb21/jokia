const form = document.querySelector('#form');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const messageTextArea = document.querySelector('textarea[name="message"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

 //Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor preencha seu nome");
        return;
    }

// Verifica se o email está preenchido e se é valido

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor preencha seu e-mail");
        return;
    }

// Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {

    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true
    }


    return false;

}   
