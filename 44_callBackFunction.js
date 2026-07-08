/*
callback function/higher order function:
-----------------------------------------

    -if any function pass as a parameter for the other function then that function
     is called as call back function

    
*/

function getName(name){
    console.log("Hello: " +name);
    
}

function greet(name,fun){
    fun(name);
}
greet("kiran",getName); //Hello kiran



console.log("----------------------");

function add(a,b){
    console.log("Addition is: "+(a+b));
}

function sub(a,b){
    console.log("subtraction is: " + (a-b));
}

function mul(a,b){
    console.log("multiplication is: " + (a*b));
}

function div(a,b){
    console.log("division is: "+ (a/b));
}

function mod(a,b){
    console.log("modulas is: "+ (a%b));
    
}

function calculation(a,b,callback){
    callback(a,b);
}
calculation(10,20,add);
calculation(10,20,sub);
calculation(10,20,mod);
calculation(10,20,mul);
calculation(10,20,div);

let response=fetch("https://restful-booker.herokuapp.com/booking");
    console.log(response);