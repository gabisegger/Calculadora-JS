const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;

const pendingOperation = () => operator != undefined;

const calculate = () => {
    if(pendingOperation()){
        const currentNumber = parseFloat(display.textContent);
        newNumber = true;
        const result = eval(`${previousNumber}${operator}${currentNumber}`);
        updateDisplay(result);  
    }
}

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

const selectOperator = (e) => {
    if(!newNumber){
        calculate()
        newNumber = true;
        operator = e.target.textContent;
        previousNumber = parseFloat(display.textContent);
        console.log(operator)
    }
}

operators.forEach(operator => operator.addEventListener('click', selectOperator));

const activateEqual = () =>{
    calculate();
    operator = undefined;
}
document.getElementById('equal').addEventListener('click', activateEqual);

const clearDisplay = () => display.textContent = '';
document.getElementById('clearDisplay').addEventListener('click', clearDisplay);

