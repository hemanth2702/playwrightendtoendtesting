/*
Encapulation:
---------------
It is binding of data and function together in single unit.

purpose:
---------
Data hiding/security.

Real time example:
--------------------
capsule, banking app, ATM, password encryption

How to implement encapsulation in JS
----------------------------------------
1. create data as private data.
In Js when you add # before variable that defines data as private.
- private data we can access only within a class. outside we can't access it.

2. define method as public using getter and setter method.
getters: to get the data.
setters: to set the data.

In encapsulation private data we can access only through public methods.

Automation frame work:
-----------------------
while designing page object model.

*/

export class EmployeeData
{
    id;
    name;
    //secure:private
    #salary=50000;

constructor(id,name){
    this.id=id;
    this.name=name;
}

getEmployeeDetails(){
    console.log("employee id is: "+ this.id);
    console.log("employee name is: "+ this.name);
    
}
//setter
setESalary(salary){
this.#salary=salary;
}

//getter
getEsalary(){
    return this.#salary;
} 
}