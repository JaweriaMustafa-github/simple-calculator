let displayValue : string = '';

function appendNumber(number:string):void {
    displayValue += number;
    updateDisplay();
}
function appendOperator(operator:string): void {
    displayValue += `${operator}`;
    updateDisplay();
}
function clearDisplay():void {
    displayValue = '';
    updateDisplay();
}
function updateDisplay():void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value=displayValue
}
function calculate():void{
    try{
        const result=eval(displayValue);
        displayValue = result.toString()
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}