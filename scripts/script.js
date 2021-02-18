const input = document.getElementsByTagName('input');
const formField = document.getElementsByClassName('sign-up-form__field');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const formError = document.getElementsByClassName('signup-form__error');

function hideError () {
    input[i].classList.remove('error');
    formError[i].style.display = 'none';
    formField[i].style.border = '1px solid rgb(185, 182, 211, 0.7)';
}

function showEmailError () {
    email.classList.add('error');
    formError[2].style.display = 'block';
    formField[2].style.border = '2px solid hsl(0, 100%, 74%)';
}

function showError () {
    input[i].classList.add('error');
    formError[i].style.display = 'block';
    formField[i].style.border = '2px solid hsl(0, 100%, 74%)';
}

function formValidation(event) {
    for (i = 0; i < 4; i++){
        hideError();
        
        if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
        }

        if (input.type != 'email' && input[i].value == '') {
        showError();
        event.preventDefault();
        }
    }
}

btn.addEventListener('click', formValidation);