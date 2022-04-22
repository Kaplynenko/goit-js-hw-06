const categoriesListRef = document.querySelector('#categories')
console.log(`Number of categories: ${categoriesListRef.children.length}`)

const itemsRef = document.querySelectorAll('.item')
itemsRef.forEach((element) => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
    
});




