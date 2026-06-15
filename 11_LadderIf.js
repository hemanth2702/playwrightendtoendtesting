/*
for multiple condition validation we use ladder if
*/

//declare 3 numbers and test numbers are greater or numbers are equals number

let num1=1000, num2=1000,num3=1000;
if(num1>num2 && num1>num3){
    console.log(` ${num1} is greater than ${num2} and ${num3} `);   
}else if(num2>num1 && num2>num3){
    console.log(`${num2} is greater than ${num1} and ${num3}`);
}else if(num1===num2 && num2===num3){
    console.log("All numbers are equal");
} else {
    console.log(`${num3} is greater than ${num1} and ${num2}`);
    
}

let browser = "Firefox".toLowerCase();
if(browser==="chrome"){
    console.log(`Test case is executed in chrome`);
}else if(browser === "firefox"){
    console.log(`Test case is executed on firefox`);
}else if(browser==="edge"){
    console.log(`Test case is executed on edge`);
}else{
    console.log(`Invalid browser to test`);
    
}