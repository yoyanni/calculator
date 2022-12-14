const display = document.getElementById("display");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equal = document.querySelector(".equal");

let previous = 0;
let operator = "";
let value = 0;

// Number Event Listener
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (typeof display.innerText == "string") display.innerText = "";
    value = parseInt(display.innerText + numbers[i].innerText);
    display.innerText = value;
  });
}

// Operator Event Listener
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    //if (+display.innerText - +display.innerText == 0)
    previous = parseInt(display.innerText);
    operator = operators[i].innerText;
    display.innerText = operator;
  });
}

// Equal Event Listener
equal.addEventListener("click", (e) => {
  operate(operator, previous, value);
});

// Actioned when "=" is clicked
function operate(string, a, b) {
  switch (true) {
    case string == "+":
      return add(a, b);
      break;
    case string == "-":
      return subtract(a, b);
      break;
    case string == "*":
      return multiply(a, b);
      break;
    case string == "/":
      return divide(a, b);
      break;
  }
}

function add(a, b) {
  display.innerText = a + b;
}

function subtract(a, b) {
  display.innerText = a - b;
}

function multiply(a, b) {
  display.innerText = a * b;
}

function divide(a, b) {
  display.innerText = a / b;
}
