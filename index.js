let firstNumber = ''
let secondNumber = ''
let result = 0
let currentOperation = ''
const resultDiv = document.querySelector('#resultDiv')
const inputDiv = document.querySelector('#inputDiv')
let calcScreen = ''

const addNumber = num => {
  result = 0
  firstNumber += num
  updateScreen()
  console.log(`first number:${firstNumber},second number:${secondNumber}`)
}
const calculate = operation => {
  secondNumber = firstNumber
  firstNumber = ''
  currentOperation = operation
  updateScreen()
}
const resultFunc = () => {
  if (currentOperation == '+') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber)
  } else if (currentOperation == '-') {
    result = parseFloat(secondNumber) - parseFloat(firstNumber)
  } else if (currentOperation == '*') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber)
  } else if (currentOperation == '/') {
    result = parseFloat(secondNumber) / parseFloat(firstNumber)
  } else {
    return
  }
  firstNumber = ''
  secondNumber = ''
  currentOperation = ''
  resultDiv.innerHTML = result
}
const clearCalculator = btn => {
  if (btn == 'ce') {
    firstNumber = ''
    secondNumber = ''
    currentOperation = ''
    inputDiv.innerHTML = ''
  } else if (btn == 'c') {
    firstNumber = ''
    secondNumber = ''
    currentOperation = ''
    inputDiv.innerHTML = ''
    result = 0
    resultDiv.innerHTML = ''
  }
}
const updateScreen = () => {
  calcScreen = `${secondNumber} ${currentOperation} ${firstNumber} `
  inputDiv.innerHTML = calcScreen
}
