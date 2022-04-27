const inputRef = document.querySelector('#validation-input');


function validation() {
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid')
    } else {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
}


inputRef.addEventListener('blur',validation,)
