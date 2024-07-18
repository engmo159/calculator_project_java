let firstNumber = ''
let secondNumber = ''
let result = 0
let currentOperation = ''
const resultDiv = document.querySelector('#resultDiv')
const inputDiv = document.querySelector('#inputDiv')
let calcScreen = ''
let resetCalculation = false

const addNumber = num => {
  if (resetCalculation) {
    firstNumber = num.toString()
    resetCalculation = false
  } else {
    firstNumber += num
  }
  updateScreen()
  console.log(
    `first number:${firstNumber},second number:${secondNumber},result:${result}`
  )
}
const calculate = operation => {
  if (firstNumber !== '') {
    secondNumber = firstNumber
    firstNumber = ''
  }
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
  firstNumber = result.toString()
  secondNumber = ''
  currentOperation = ''
  resultDiv.innerHTML = result
  result = 0
  resetCalculation = true
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
