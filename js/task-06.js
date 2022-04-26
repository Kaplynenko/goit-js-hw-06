const inputRef = document.querySelector('#validation-input');


function validation(){
    if (inputRef.value.length == inputRef.dataset.length) {
      return inputRef.classList.add('valid')
   } inputRef.classList.add('invalid')
}
function removeInvalidClass() {
    if (inputRef.value.length == inputRef.dataset.length) {
        inputRef.classList.remove('invalid')
    }
}

inputRef.addEventListener('blur',validation,)
inputRef.addEventListener('blur',removeInvalidClass)