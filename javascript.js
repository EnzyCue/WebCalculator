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


let equation = {
    operator: null,
    num1: '',
    num2: '',
}


function buttonSetup(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const buttonClass = button.classList[0];

            switch (buttonClass) {
                case "add":  
                    if(equation.num1){
                        if(equation.num2) {
                            calculate();
                        }
                        equation.operator = add;
                    }                  
                    break;
                case "subtract":          
                    if(equation.num1){
                        if(equation.num2) {
                            calculate();
                        }
                        equation.operator = subtract;
                    }                  
                    break;
                case "multiply":        
                    if(equation.num1){
                        if(equation.num2) {
                            calculate();
                        }
                        equation.operator = multiply;
                    }                  
                    break;
                case "divide":       
                    if(equation.num1){
                        if(equation.num2) {
                            calculate();
                        }
                        equation.operator = divide;
                    }                  
                    break;
                case "clear":
                    clearDisplay();
                    clearEquation();
                    break;
                case "equals":
                    if(equation.num2) {
                        calculate();
                    }
                    break;     
                default:
                    const number = button.innerText;

                    if(equation.operator === null){
                        equation.num1 += number;
                        display(equation.num1);
                    }else {
                        equation.num2 += number;
                        display(equation.num2);
                    }

                    break;


            }
        });
});
}

function calculate(){
    let result = operate(equation.operator, parseInt(equation.num1), parseInt(equation.num2));

    if(result === Infinity){
        display('Sorry buddy...');
        clearEquation();
        return;
    }else {
        display(result);
    }
    
    clearEquation();
    equation.num1 = result.toString();

}

function clearEquation(){
    equation.num1 = '';
    equation.num2 = '';
    equation.operator = null;
}

function display(newText){
    const displayText = document.querySelector(".display");
    displayText.innerText = newText;
}

function clearDisplay(){
    const displayText = document.querySelector(".display");
    displayText.innerText = '';
}

buttonSetup();