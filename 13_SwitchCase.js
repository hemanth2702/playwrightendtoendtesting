/*
Switch case we use for multiple condition validation
key===value
we don't use any ethods or operators in case value
we can use break statement in every case
break statement is used to execute from switch case body/scope


break statement is used only on switch case and loop
*/

//traffic light

let color = "pink";

switch(color){

    case "red": console.log("STOP");
    break;
    case "yellow": console.log("READY");
    break;
    case "green": console.log("Go");
    break;
    default: console.log("Error");
}


/*
browser validation for switch case
to ignore white space from the string
*/

let browser = " Firefox";
switch(browser.trim().toLowerCase()){
    case "chrome": console.log("Executed in chrome");
    break;
    case "firefox": console.log("Executed in firefox");
    break;
    case "edge": console.log("Executed on edge");
    break;
    default: console.log("enter correct browser");

}


/*
calculating the numbers by switch statement
*/

let operaator= "-";
let num1=10,num2=20;

switch(operaator){
    case "+": console.log(num1+num2);
    break;
    case "-": console.log(num1-num2);
    break;
    case "*": console.log(num1*num2);
    break;
    case "%": console.log(num1%num2);
    break;
    case "/": console.log(num1/num2);
    break;
    default: console.log("Enter correct operator");
}
    
    
    
    
    
