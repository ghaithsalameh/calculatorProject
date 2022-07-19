let sign = 0;
let num1 = 0;
let num2 = 0;
const previous = [];
const display = document.querySelector('.display');
let result = 0;


function assignSign(userinput){
    sign=userinput;
    display.textContent = sign;
}
function assignValue(userinput){
    if(sign==0){
        num1=userinput;
        display.textContent = num1;
    } else {
        num2=userinput;
        display.textContent = num2;
    }
}
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2==0){return display.textContent="Do not divide by zero";
}else if(num1==0){return 0;}
else {
    return num1/num2;
}}
function operate(sign,num1,num2){
   if(previous.length==0){
    num1=num1;
   } else {
    num1=previous[previous.length-1];
   }
    switch (sign){
    case "*":
        result= multiply(num1,num2);
        display.textContent= result;
        previous.push(result);
        break;
    case "+":
        result = add(num1,num2); 
        display.textContent= result;
        previous.push(result); 
        break;
    case "-":
        result = subtract(num1,num2);
        display.textContent= result;
        previous.push(result);
        break;
    case "/":
       result = divide(num1,num2);
        display.textContent= result;
        previous.push(result);

    break;
    default:
    return  "Sign entered is not accepted";          
   }
}
function cleanUP(num1,num2,sign,display){
assignValue(0)
assignSign(0)
assignValue(0)
display.textContent=0;
}
