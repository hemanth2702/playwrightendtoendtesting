/*
what is runtime polymorphism:
------------------------------
- To achive run time polymorphism two class must be in a 
relation like parent and child (Is-A relation)
- It is called method overriding.
- when classes in relation and we can create a same methods with same syntax 
in parent and child class then child class over ride parent class method. 

From child object you will get updated method.


*/

class parent
{
    color(){
        console.log("blue");
        
    }
}

class child extends parent{
    color(){
        console.log("yellow");
        
    }
}

let l1 = new parent();
l1.color(); //blue

let l2 = new child();
l2.color(); //yellow