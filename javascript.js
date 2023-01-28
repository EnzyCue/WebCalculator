function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2){
    return operator(num1, num2);
}

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonClass = button.classList[0];
        switch (buttonClass) {
            case "zero":
                display(0);
                break;
            case "one":
                display(1);
                break;
            case "two":
                display(2);
                break;
            case "three":
                display(3);
                break;
            case "four":
                display(4);
                break;
            case "five":
                display(5);
                break;
            case "six":
                display(6);
                break;
            case "seven":
                display(7);
                break;
            case "eight":
                display(8);
                break;
            case "nine":
                display(9);
                break;
            case "sum":
                display('+');
                break;
            case "subtract":
                display('-');
                break;
            case "multipy":
                display('×');
                break;
            case "divide":
                display('÷');
                break;
            
            default:
                // code to be executed for any other button
                break;
        }
    });
})

function display(newText){
    const displayText = document.querySelector(".display");
    displayText.innerText += newText;
    return;
}

