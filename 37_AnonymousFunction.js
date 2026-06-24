/*
Function
------------
Group of statements we can write to perform functionality is called function.

In JS we have 2 types of function:
----------------------------------
1. Function declaration
2. Function Expression(modren)
    * Anonymous Function.
    * Arrow function

*/

let test1=function(){
    console.log("Anonymous function calling");
    
}
//call
test1();


console.log("-----Anonymous function with parameter");

/**
 * 
 * @param {string} msg 
 */
let test2=function(msg){
    console.log("the given msg is:" + msg);
}
test2("Hello All");

console.log("----------Anonymous function with parameter and with return keyword---------");

let test3=function(username,password){
    return `the username is: ${username} and password is: ${password}`;
}
let result=test3("Amith", "Amith@123");
console.log(result);

