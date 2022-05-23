const previousOperand = document.querySelector(".previous"); 
const currentOperand = document.querySelector(".current"); 
const result = document.querySelector(".result"); 
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const calculatorContainer = document.querySelector(".calculator-container");
const body = document.querySelector("body");

let operator = [];
let clear = 0;

calculatorContainer.addEventListener("click", numbers)

function numbers(e){
    if(e.target.classList.contains("number")){
        if(e.target.textContent.includes(".") && currentOperand.textContent.includes(".")){
            return
        }else{
            if(clear === 1){
                currentOperand.textContent = e.target.textContent
                clear = 0;
            }else {
                currentOperand.textContent += e.target.textContent;
            }
        }
        
    }else if(e.target.classList.contains("operator")){
        if(currentOperand.textContent == "" || currentOperand.textContent == "Infinity"){
            return
        }else if(previousOperand.textContent !== ""){
            calc();
            operator.push(e.target.textContent);
            previousOperand.textContent =  currentOperand.textContent;
            previousOperand.textContent += e.target.textContent;
            currentOperand.textContent = "";
        }
        else{
            operator.push(e.target.textContent);
            previousOperand.textContent =  currentOperand.textContent;
            previousOperand.textContent += e.target.textContent;
            currentOperand.textContent = "";
        }
    }else if(e.target.classList.contains("clear-all")){
        currentOperand.textContent = "";
        previousOperand.textContent = "";
    }else if(e.target.classList.contains("del")){
        currentOperand.textContent = currentOperand.textContent.slice(0, currentOperand.textContent.length -1);
    }else if(e.target.classList.contains("equals")){
        if(previousOperand.textContent == "" || currentOperand.textContent == ""){
            return
        }else{
            calc();
            clear = 1;
        }
    }
}
function calc(){
    if(operator[operator.length - 1] == "+"){
        currentOperand.textContent = parseFloat(currentOperand.textContent) + parseFloat(previousOperand.textContent);
        previousOperand.textContent =  "";
    }else if(operator[operator.length - 1]  == "-"){
        currentOperand.textContent = parseFloat(previousOperand.textContent) - parseFloat(currentOperand.textContent);
        previousOperand.textContent = "";
    }else if(operator[operator.length - 1]  == "*"){
        currentOperand.textContent = parseFloat(currentOperand.textContent) * parseFloat(previousOperand.textContent);
        previousOperand.textContent = "";
    }else if(operator[operator.length - 1]  == "÷"){
        if(previousOperand.textContent == "0÷"){
            currentOperand.textContent = "0"
            previousOperand.textContent = "";
        }else if(currentOperand.textContent == "0"){
            currentOperand.textContent = "Infinity"
            previousOperand.textContent = "";
            clear = 1;
        }else{
            console.log(previousOperand.textContent)
            currentOperand.textContent = parseFloat(currentOperand.textContent) / parseFloat(previousOperand.textContent);
            previousOperand.textContent = "";
        }
    }
}