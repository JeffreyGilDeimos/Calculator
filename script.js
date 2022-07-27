let input;
let firstNumber;
let secondNumber;
let operation;
let answer;

console.log(firstNumber, operation,secondNumber)
function clickNumber(input) {    
    if (operation===undefined) {
        if (firstNumber===undefined) {        
            firstNumber=input;
            } else  {
            firstNumber=firstNumber + input;
            }
    } else {
        if (secondNumber===undefined){
            secondNumber=input;
            } else {
                secondNumber=secondNumber + input;
            }
        }
   console.log(firstNumber, operation, secondNumber);
}
function clickOperation(input) {  
   operation=input;
   console.log(firstNumber, operation, secondNumber);
}
function clickEqual(){
    switch(operation) {
        case '+': {     
        answer=Number(firstNumber) + Number(secondNumber);
        console.log("= " + answer);
        firstNumber=answer;
        secondNumber=undefined;
        operation=undefined;
        break;
        }
        case '-': {     
            answer=Number(firstNumber) - Number(secondNumber);
            console.log("= " + answer);
            firstNumber=answer;
            secondNumber=undefined;
            operation=undefined;
            break;
            }
        case '*': {     
            answer=Number(firstNumber) * Number(secondNumber);
            console.log("= " + answer);
            firstNumber=answer;
            secondNumber=undefined;
            operation=undefined;
            break;
            }    
        case '/': {     
            answer=Number(firstNumber) / Number(secondNumber);
            console.log("= " + answer);
            firstNumber=answer;
            secondNumber=undefined;
            operation=undefined;
            break;
            }
        default: {
            console.log("Operation unknown");
        }
    }
}
function allClear(){
    firstNumber=undefined;
    secondNumber=undefined;
    operation=undefined;    
    console.log(firstNumber, operation, secondNumber);
}