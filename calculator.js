const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text;
        newNumber = false;
    }else{
        display.textContent += text;
    }    
}

const insertNumber = (e) => updateDisplay(e.target.textContent);

numbers.forEach(number => number.addEventListener('click', insertNumber));

const selectOperator = () => {
    newNumber = true;
}

operators.forEach(operator => operator.addEventListener('click', selectOperator));
