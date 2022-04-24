const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value')
let countValue = 0;

const updateValue = () => {
    valueRef.textContent = countValue
};
const increment = () => {
    countValue += 1
};
const decrement = () => {
    countValue -= 1
}
incrementBtn.addEventListener('click', () => {
    increment();
    updateValue()

});
decrementBtn.addEventListener('click', () => {
    decrement();
    updateValue()
})







