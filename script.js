const previousOperand = document.querySelector(".previous"); 
const currentOperand = document.querySelector(".current"); 
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const calculatorContainer = document.querySelector(".calculator-container");
const body = document.querySelector("body");

// equalsBtn.addEventListener("click", (e) => {
//     currentOperand.textContent = parseInt(currentOperand.textContent) + parseInt(previousOperand.textContent);
//     previousOperand.textContent = "";
// })
let operator = [];


calculatorContainer.addEventListener("click", numbers)


function numbers(e){
    if(e.target.classList.contains("number")){
        currentOperand.textContent += e.target.textContent;
    }else if(e.target.classList.contains("operator")){
        operator.push(e.target.textContent);
        previousOperand.textContent =  currentOperand.textContent;
        previousOperand.textContent += e.target.textContent;
        currentOperand.textContent = "";
    }else if(e.target.classList.contains("clear-all")){
        currentOperand.textContent = "";
        previousOperand.textContent = "";
    }else if(e.target.classList.contains("del")){
        currentOperand.textContent = currentOperand.textContent.slice(0, currentOperand.textContent.length -1);
    }else if(e.target.classList.contains("equals")){
        let a = parseInt(previousOperand.textContent);
        let b = parseInt(currentOperand.textContent)
        calc();
    }
}

function calc(){
    if(operator[operator.length - 1] == "+"){
        currentOperand.textContent = parseInt(currentOperand.textContent) + parseInt(previousOperand.textContent);
        previousOperand.textContent = "";
    }else if(operator[operator.length - 1]  == "-"){
        currentOperand.textContent = parseInt(previousOperand.textContent) - parseInt(currentOperand.textContent);
        previousOperand.textContent = "";
    }else if(operator[operator.length - 1]  == "*"){
        currentOperand.textContent = parseInt(currentOperand.textContent) * parseInt(previousOperand.textContent);
        previousOperand.textContent = "";
    }else if(operator[operator.length - 1]  == "÷"){
        currentOperand.textContent = parseInt(currentOperand.textContent) / parseInt(previousOperand.textContent);
        previousOperand.textContent = "";
    }
}
