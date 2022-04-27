
const divRef = document.querySelector('#boxes')

const arrayDiv = []
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    const divs = document.createElement('div')
     arrayDiv.push(divs)
  }return arrayDiv.join('')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
divRef.append(...createBoxes())
console.log()