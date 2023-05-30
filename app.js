// Получаем элементы со страницы
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

// Функция для сложения чисел
function addition() {
  const sum = Number(num1.value) + Number(num2.value);
  result.value = sum;
}

// Функция для вычитания чисел
function subtraction() {
  const difference = Number(num1.value) - Number(num2.value);
  result.value = difference;
}

// Функция для умножения чисел
function multiplication() {
  const product = Number(num1.value) * Number(num2.value);
  result.value = product;
}

// Функция для деления чисел
function division() {
  const quotient = Number(num1.value) / Number(num2.value);
  result.value = quotient;
}

// Добавляем обработчики событий на кнопки
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);

// Функция для расчета результата
function calculateResult() {
  const operator = document.querySelector('input[name="operator"]:checked').value;
  if (operator === "+") {
    addition();
  } else if (operator === "-") {
    subtraction();
  } else if (operator === "*") {
    multiplication();
  } else if (operator === "/") {
    division();
  }
}

// Добавляем обработчик события на кнопку "="
calculate.addEventListener("click", calculateResult);