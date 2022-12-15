const display = document.getElementById("display");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equal = document.querySelector(".equal");

let previous = 0;
let firstOp = "";
let secondOp = "";
let value = 0;
let calculated = false;
let isNew = true;

// Number Event Listener
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (isNew) {
      display.innerText = "";
    } else if (calculated) {
      display.innerText = "";
      calculated = false;
    }
    value = parseInt(display.innerText + numbers[i].innerText);
    display.innerText = value;
    isNew = false;
  });
}

// Operator Event Listener
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    if (firstOp == "") {
      previous = parseInt(display.innerText);
      firstOp = operators[i].innerText;
      isNew = true;
    } else {
      previous = operate(previous, firstOp, value);
      firstOp = operators[i].innerText;
      // secondOp = operators[i].innerText;
      // firstOp = secondOp;
      // console.log(`${previous} ${secondOp} ${value} 2nd`);
    }
  });
}

// Equal Event Listener
equal.addEventListener("click", (e) => {
  operate(previous, firstOp, value);
  //firstOp = "";
  console.log(`${previous} ${firstOp} ${value}`);
});

// Actioned when "=" is clicked
function operate(a, op, b) {
  switch (true) {
    case op == "+":
      return add(a, b);
      break;
    case op == "-":
      return subtract(a, b);
      break;
    case op == "*":
      return multiply(a, b);
      break;
    case op == "/":
      return divide(a, b);
      break;
  }
}

function add(a, b) {
  calculated = true;
  return (display.innerText = a + b);
}

function subtract(a, b) {
  calculated = true;
  return (display.innerText = a - b);
}

function multiply(a, b) {
  calculated = true;
  return (display.innerText = a * b);
}

function divide(a, b) {
  calculated = true;
  return (display.innerText = a / b);
}
