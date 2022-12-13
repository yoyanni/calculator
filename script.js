function operate(string, a, b) {
  switch (true) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
