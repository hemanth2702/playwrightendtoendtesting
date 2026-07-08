/*
polymorphism:
---------------
one thing in many form that we can reuse 

purpose:
---------
method reusability

real time example
------------------
payment gateway, ola, zomato

Types:
------
1. complete time polymorphism.
2. run time polymorphism.

what is complie time /method overloading
---------------------------------------------
method can be overloaded only when method has same name and different 
signature and declared in the same class. 

different signatures:
------------------------
1. Number of parameters.
2. type of parameters.
3. change order of parameters.

Js don't support method overloading.
Js is interpreted based language we don't have complier at the time of writing code,
complier involve at the time of run time only so it will not support method overloading.

run time polymorphism:
-----------------------
To achive run time polymorphism first two classes must be related like parent and child (Is-A)
- Method overriding.
- When classes in relation and we create same name method with same syntax in parent and child
class then child class will override parent class method.

from child object you will get updated method.
*/

class Test{
    login(){
        console.log("login successful");
    }
    login(un,pwd){
        console.log("login with user name: "+ un + " & password: " + pwd );
   }
   login(un,pwd,otp){
    console.log("login with username: "+ un + " & password: "+ pwd + " & otp: "+ otp);
    
   }
}

let l1 = new Test();
l1.login("hemanth", 12345,6095); // only last login will be executed


console.log("---------------------------------");

function test1(){
    console.log("test()1 is calling......");
    
}

function test1(){
    console.log("test()2 is calling......");
    
}
test1(); //SyntaxError: Identifier 'test1' has already been declared