var displayValue = '';
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}
function appendOperator(operator) {
    displayValue += "".concat(operator);
    updateDisplay();
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById('display');
    display.value = displayValue;
}
function calculate() {
    try {
        var result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    }
    catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
