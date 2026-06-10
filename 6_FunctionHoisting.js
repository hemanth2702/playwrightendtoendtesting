/*
hoisting allow javascript to call variable /functions before even declaration and
-var type is fully hoisted and function declaration also fully hoisted

-let and const type variable are hoisted but they always stay in TDZ(Temporal dead zone)
if you try to call before declaration, you will get error

-for modern function Anonymous and arrow function before declaration if 
you call then you will get error.
*/



test1();
// test2();   // reference error: cannpt access test2() before initialization.     
// test3();   // reference error: cannot access test3() before initialization.

function test1(){

    console.log("Hello All.........");
    
}


let test2 = function(){
    console.log("Hello All...........");
    
}

let test3=()=>{
    console.log("Hello All..............");
    
}