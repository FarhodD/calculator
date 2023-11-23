const calcElems = document.querySelectorAll('.calc__item');
const inpputEl = document.querySelector('input');
const equalBtn = document.getElementById('equal');
const clearEl = document.getElementById('clear');
inpputEl.disabled = true;
let inputValue = '';
let numRes1 = 0;
let numRes2 = 0;

calcElems.forEach(calcEl => {
  calcEl.addEventListener('click', () => {
    inpputEl.value += calcEl.innerHTML;
    inputValue = inpputEl.value
  })
})

const calculate = (inputValue) => {
  if(inputValue.includes('+')) {
    numRes1 = Number(inputValue.substring(0, inputValue.indexOf('+')));
    numRes2 = Number(inputValue.substring(inputValue.indexOf('+') + 1))
    inpputEl.value = numRes1 + numRes2
  } else if(inputValue.includes('-')) {
    numRes1 = Number(inputValue.substring(0, inputValue.indexOf('-')));
    numRes2 = Number(inputValue.substring(inputValue.indexOf('-') + 1))
    inpputEl.value = numRes1 - numRes2
  } else if(inputValue.includes('*')) {
    numRes1 = Number(inputValue.substring(0, inputValue.indexOf('*')));
    numRes2 = Number(inputValue.substring(inputValue.indexOf('*') + 1))
    inpputEl.value = numRes1 * numRes2
  } else if(inputValue.includes('/')) {
    numRes1 = Number(inputValue.substring(0, inputValue.indexOf('/')));
    numRes2 = Number(inputValue.substring(inputValue.indexOf('/') + 1))
    inpputEl.value = numRes1 / numRes2
  }
}

equalBtn.addEventListener('click', () => {
  calculate(inputValue);
})


clearEl.addEventListener('click', () => {
  inpputEl.value = '';
});