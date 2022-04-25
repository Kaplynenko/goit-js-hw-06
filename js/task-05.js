const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output')

nameInputRef.addEventListener('input',inputChange)
function inputChange(event){
 nameOutputRef.textContent = event.currentTarget.value
}
function refreshInput(event) {
    
    if (event.currentTarget.value === '') {
        nameOutputRef.textContent = 'Anonymous'
    }
}
 console.log(nameInputRef.addEventListener('blur', refreshInput))