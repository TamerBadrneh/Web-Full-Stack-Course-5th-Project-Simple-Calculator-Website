// used variables
// -----------------------------------------------------------------------------------------------------------------
let num1 = "";
let num2 = "";
let result = "";
let operation = "";

// Utilities:
// -----------------------------------------------------------------------------------------------------------------
// 1. Play Sound
function playSound() {
  new Audio("./Assets/sounds/Click.wav").play();
}

// 2. Screen Display
function displayOnScreen(value) {
  $("#display-screen").text(value);
}

// 3. Set Buttons
function setButtonsClickable(classOfButton, callBack) {
  let set = document.querySelectorAll("." + classOfButton);
  for (let element of set) {
    element.addEventListener("click", () => callBack(element.innerText + ""));
  }
}

// Functionality:
// -----------------------------------------------------------------------------------------------------------------
// 1. Basic Operations

function add() {
  return num1 + num2;
}

function subtract() {
  return num1 - num2;
}

function multiply() {
  return num1 * num2;
}

function divide() {
  if (num2 === 0) return "infinity";
  if (num1 % num2 === 0) return num1 / num2;
  return num1 / num2 + " -> " + Math.round(num1 / num2);
}

// 2. Result Calculation
function calculate(operation) {
  playSound();
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operation) {
    case "+":
      result = add();
      break;
    case "-":
      result = subtract();
      break;
    case "x":
      result = multiply();
      break;
    case "/":
      result = divide();
      break;
    default:
      reset();
  }

  displayOnScreen(result);
}

// 3. Eraser
function reset() {
  playSound();
  num1 = num2 = result = operation = "";
  displayOnScreen("");
}

// 4. Set Nums Values
function setValues(value) {
  playSound();
  if (operation === "" || num1 === "") {
    num1 += value;
    displayOnScreen("");
    displayOnScreen(num1);
  } else {
    num2 += value;
    displayOnScreen("");
    displayOnScreen(num2);
  }
}

// 5. Set Operations
function setOperation(value) {
  playSound();
  operation = value;
  displayOnScreen("");
}

// Project Startup Function...
// -----------------------------------------------------------------------------------------------------------------
function main() {
  $("#answer").click(() => calculate(operation));
  $("#eraser").click(reset);
  setButtonsClickable("number", setValues);
  setButtonsClickable("operation", setOperation);
}

main();
