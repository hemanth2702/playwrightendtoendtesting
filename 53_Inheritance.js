/*
Inheritance:
-------------
- Accessing properties of one class into another class.
- it is Is-A relation.

purpose:
--------
- To avoid duplication.
-method reusability.
-to achive run time polymorphism.

real time example:
----------------------
parent and child relation

types:
------
1. single level.
2. multi level
3. hierarchical inheritance.

Note:
------
In Js we can't achive these two type directly.
4. multiple inheritance.
5. hybrid inheritance
we will see in typescript.

how to achive it:
-------------------
Using extend keyword we can achive in JS

parent class can only access parent properties.
child class can access parent + child properties.
*/

class A{
    m1(){
console.log("m1() is calling....");
    }
    
    
}

class B extends A
{
    m2(){
        console.log("m2() is calling....");
        
    }
}

//object

let a1 = new A();
a1.m1(); // individual  m1() is calling....

let b1 = new B();
b1.m1(); // inherited  m1() is calling....
b1.m2(); // individual  m2() is calling....