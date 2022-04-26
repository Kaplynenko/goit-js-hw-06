const changeColorBtn = document.querySelector('.change-color');
const bodyRef = document.querySelector('body')
const velueColor = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColor)
function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
velueColor.textContent = getRandomHexColor()
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

