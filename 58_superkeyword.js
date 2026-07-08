/*
Super keyword:
----------------
help too call immediate parent class variable, method and constructor.
- Immediate parent properties we can call in child class.

- In inheritance child class has to call parent class using super()
- constructor call should be first line of constructor.

- immediate parent method you can call using super keyword.
- immediate parent variable you can call only through method

*/

class parent
{
    pid;

    constructor()
    {
        console.log("parent constructor is calling");
        
    }
    getParentIncome()
    {
console.log("parent income is $170000");

    }

    getPid(){
        return this.pid;
    }
}

class child extends parent
{
    cid=2020;

    constructor(){
        super();//super constructor
        /*ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        */
        console.log("child constructor is calling");
        
    }
    getChildIncome(){
        console.log("child id is:" + this.cid);
        console.log(super.getPid());
        super.getPid();
        super.getParentIncome();
        console.log("child income is $170000");
        
        

    }
}

let c1 = new child();
c1.getChildIncome();
