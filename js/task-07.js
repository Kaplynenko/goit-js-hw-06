const spanRef = document.querySelector('#text')
const inputRef = document.querySelector('#font-size-control')
function inputs(event) {
    spanRef.style.fontSize = event.currentTarget.value + 'px'
}
inputRef.addEventListener('input', inputs)
spanRef.style.fontSize = inputRef.value + 'px'
