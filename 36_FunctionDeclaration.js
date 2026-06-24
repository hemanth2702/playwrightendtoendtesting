function test1(){
    console.log("function declaration test1() is calling...");
    
}
//call
test1();


console.log("--------function with parameter---------");

/*
what is parameter?
---------------------
It represents variable name

what is Argument?
------------------
It represents real data 
*/

//JS documentation

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function add(a,b) //2 parameters here a and b are local
{
    console.log("Addition is:" +(a+b));
}
//call
add(100,30);
add("hello", "all");

console.log("----function with parameter with return keyword");

/*
return keyword:
---------------
-from any function if we want to return the output/data then we use return keyword.
-return statement should be the last statement of the function.
-return keyword returns the result to the calling function.
*/

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function subtraction(a,b){
    return a-b;
}
//call
let result=subtraction(300,100);
console.log(result);
