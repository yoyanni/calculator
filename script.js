const display = document.getElementById("display");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equal = document.querySelector(".equal");
const clear = document.getElementById("clear");

let previous = 0;
let firstOp = "";
let value = 0;
let calculated = false;
let isNew = true;

clear.addEventListener("click", (e) => {
  previous = 0;
  firstOp = "";
  value = 0;
  calculated = false;
  isNew = true;
  display.innerText = 0;
});

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
      // if no operator has been chosen yet, set up for calculation
      previous = parseInt(display.innerText);
      firstOp = operators[i].innerText;
      isNew = true;
    } else {
      previous = operate(previous, firstOp, value);
      console.log(`${previous} ${firstOp} ${value}`);
      firstOp = operators[i].innerText;
    }
  });
}

// Equal Event Listener
equal.addEventListener("click", (e) => {
  operate(previous, firstOp, value);
  console.log(`${previous} ${firstOp} ${value}`);
});

// Actioned when "=" is clicked
function operate(a, op, b) {
  switch (true) {
    case op == "+":
      return add(a, b);
    case op == "-":
      return subtract(a, b);
    case op == "*":
      return multiply(a, b);
    case op == "/":
      return divide(a, b);
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
  if ((a * b) % 1 == 0) {
    return (display.innerText = a * b);
  } else {
    return (display.innerText = (a * b).toFixed(3));
  }
}

function divide(a, b) {
  calculated = true;
  if (a == 0 || b == 0) {
    return (display.innerText = "Naughty");
  }
  if ((a / b) % 1 == 0) {
    return (display.innerText = a / b);
  } else {
    return (display.innerText = (a / b).toFixed(3));
  }
}
