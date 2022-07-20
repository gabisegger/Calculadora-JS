const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;

const pendingOperation = () => operator != undefined;

const calculate = () => {
    if(pendingOperation()){
        const currentNumber = parseFloat(display.textContent.replace(',','.'));
        newNumber = true;
        const result = eval(`${previousNumber}${operator}${currentNumber}`);
        updateDisplay(result);  
    }
}

const updateDisplay = (text) => {
    if(newNumber){
        display.textContent = text.toLocaleString('BR');
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
        previousNumber = parseFloat(display.textContent.replace(',','.'));
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

const clearCalculus = () => {
    clearDisplay();
    operator = undefined;
    newNumber = true;
    previousNumber = undefined;
}
document.getElementById('clearCalculus').addEventListener('click', clearCalculus);

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('backspace').addEventListener('click', removeLastNumber);

const invertSignal = () => {
    newNumber = true;
    updateDisplay(display.textContent * -1);
}
document.getElementById('reverse').addEventListener('click', invertSignal);

const thereIsDecimal = () => display.textContent.indexOf(',') != -1;
const thereIsValue = () => display.textContent.length > 0;
const insertDecimal = () => {
    if(!thereIsDecimal()){
        if(thereIsValue()){
            updateDisplay(',');
        }else{
            updateDisplay('0,');
        }
    }
}
document.getElementById('decimal').addEventListener('click', insertDecimal);