let input;
let firstNumber;
let secondNumber;
let operation;
let answer;
let flag=0; // to check if firstNumber is not came from answers.
        //Initialize variables
console.log(firstNumber, operation,secondNumber)

        //Function in entering first and second number.
function clickNumber(input) { 
    if (operation===undefined) {
        if (firstNumber===undefined) {        
            firstNumber=input;
            } else if (firstNumber===0 || flag===1){
                firstNumber=input;
                flag=0;
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
   if (firstNumber===undefined){
        alert("No number to execute.");
        operation=undefined;  
   } 
   console.log(firstNumber, operation, secondNumber);
}
        //Function to execute numbers.
function clickEqual(){
    if (firstNumber===undefined) {        
        alert("No number to execute.");
        console.log(firstNumber, operation, secondNumber);
    } else if (operation===undefined) {     
        console.log(firstNumber, operation, secondNumber);
    } else if (secondNumber===undefined) {        
        alert("Please input the second number.");
        console.log(firstNumber, operation, secondNumber);
    } else {       
        switch(operation) {
            case '+': {                             
                answer=Number(firstNumber) + Number(secondNumber);
                console.log("= " + answer);  
                firstNumber=answer;
                secondNumber=undefined;   
                operation=undefined;    
                flag=1;                 
                break;
            }          
            case '-': {     
                answer=Number(firstNumber) - Number(secondNumber);   
                console.log("= " + answer);               
                firstNumber=answer;
                secondNumber=undefined;   
                operation=undefined;  
                flag=1;                 
                break;
            }                
            case '*': {     
                answer=Number(firstNumber) * Number(secondNumber); 
                console.log("= " + answer);               
                firstNumber=answer;
                secondNumber=undefined;
                operation=undefined;
                flag=1; 
                break;
            }    
            case '/': {     
                answer=Number(firstNumber) / Number(secondNumber);
                console.log("= " + answer);    
                firstNumber=answer;
                secondNumber=undefined;   
                operation=undefined; 
                flag=1;                     
                break;
            }            
            default: {
                    alert("Unknown operation.");
            }
        }
    }
}
        //Function to clear values.
function allClear(){
    firstNumber=undefined;
    secondNumber=undefined;
    operation=undefined;    
    console.log(firstNumber, operation, secondNumber);
}
        //Function to convert positive or negative numbers.
function clickSign() {
    if (firstNumber===undefined) {
        alert("No number to execute.");
    } else if (operation && secondNumber===undefined) {
        alert("No second number to execute.");
    } else if (secondNumber) {
        if (secondNumber==0) {
            secondNumber = 0;
        } else {
            secondNumber = secondNumber * -1;  
            flag=1;
        }     
        console.log(firstNumber, operation, secondNumber);   
    } else {
        if (firstNumber==0) {
            firstNumber=0;
        } else {
            firstNumber = firstNumber * -1;
            flag=1;
        }
        console.log(firstNumber, operation, secondNumber);
    }
}
