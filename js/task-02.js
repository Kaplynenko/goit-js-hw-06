const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients')

const ingredientsList = ingredients.map((element) => {
  const elementList = document.createElement('li');
  elementList.classList.add('item');
  elementList.textContent = element;
  return elementList
})

ingredientsRef.append(...ingredientsList)
