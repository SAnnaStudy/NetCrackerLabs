const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn');
const resultBtn = document.getElementById('result');
const howWorkBtn = document.getElementById('howWorkBtn');
const display = document.getElementById('display');    
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let isMemoryPendingOperation = '';

for(let i=0; i<numbers.length; i++){    
    let number = numbers[i];
    number.addEventListener('click', function(e){
        numberPress(e.target.textContent);
    });
};

for(let i=0; i<operations.length; i++){    
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        operationPress(e.target.value);
    });
};

for(let i=0; i<clearBtns.length; i++){    
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e){
        clear(e.srcElement.id);
    });
};

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

function numberPress(number) {
    if (memoryNewNumber) {
        display.value = number;
        memoryNewNumber = false;
    } else {
      if (display.value === '0') {
        display.value = number;
      } else {
        if(number !== '-')
          display.value += number;
        else
          operationPress('-');
      }
    }
  }

function operationPress(op) {
    let localOperationMemory = display.value; // сохраним то, что было на табло
  
  if(op === 'sqrt'){
    if(localOperationMemory[0] === '-'){
      memoryCurrentNumber = 'Error: negative number.';
      display.classList.add('calc-display-input-error');
    }
    else{
      memoryCurrentNumber = Math.sqrt(parseFloat(localOperationMemory));
    }
  }
  else{
      if (memoryNewNumber && isMemoryPendingOperation !== '=') { // Если ввели втрое число и операция !== '='
          display.value = memoryCurrentNumber; // текущее число
        } 
      else {
          memoryNewNumber = true;
          if(localOperationMemory.indexOf('.'))
            localOperationMemory = parseFloat(localOperationMemory);
        if (isMemoryPendingOperation === '+') {
          memoryCurrentNumber = parseFloat((parseFloat(memoryCurrentNumber) + parseFloat(localOperationMemory)).toFixed(15)) ;
        } else if (isMemoryPendingOperation === '-') {
          memoryCurrentNumber = parseFloat((parseFloat(memoryCurrentNumber) - parseFloat(localOperationMemory)).toFixed(15)) ;
        } else if (isMemoryPendingOperation === '*') {
          memoryCurrentNumber = parseFloat((parseFloat(memoryCurrentNumber) * parseFloat(localOperationMemory)).toFixed(15)) ;
        } else if (isMemoryPendingOperation === '/') {
          memoryCurrentNumber = parseFloat((parseFloat(memoryCurrentNumber) / parseFloat(localOperationMemory)).toFixed(15)) ;
        } else if (isMemoryPendingOperation === 'pow') {
          memoryCurrentNumber = parseFloat(Math.pow(memoryCurrentNumber, localOperationMemory));
        } 
        else {
          memoryCurrentNumber = parseFloat(localOperationMemory);
        }
        isMemoryPendingOperation = op;
      }
  }
  display.value = memoryCurrentNumber;
}

function clear(id){
    if (id === 'ce') {
        display.value = '0';
        memoryNewNumber = true;
      } else if (id === 'c') {
        display.value = '0';
        memoryNewNumber = true;
        memoryCurrentNumber = 0;
        isMemoryPendingOperation = '';
      }
      console.clear();
      display.classList.remove('calc-display-input-error');
};

function decimal(argument){
    var localDecimalMemory = display.value;

    if(localDecimalMemory === '-')
    localDecimalMemory = '-0';
    if(memoryNewNumber){
        localDecimalMemory = '0.';
        memoryNewNumber = false;
    }
    else{
        if(localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
};