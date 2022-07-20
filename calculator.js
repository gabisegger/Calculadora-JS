const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');

const updateDisplay = (text) => {
    display.textContent += text;
}

const insertNumber = (e) => updateDisplay(e.target.textContent);

numbers.forEach(number => number.addEventListener('click', insertNumber));
