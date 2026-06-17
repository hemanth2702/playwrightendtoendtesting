/*
constructor
------------

- constructor is special method used to initialize the object
- Js constructor name and class name should not be same.
- we declare constructor using constructor keyword.
- In Js only one constructor is allowed.
- Js constructor get called at the time of object creation
constructor overloading in Js is not possible.


this keyword:
--------------

- this keyword refere current class object properties
any current class properties and methods we can access  using this keyword.

what is garbage collector:
---------------------------

- It is automechanism, call by js engine internally for memory management.
- GC always monitor js engine heap memory and heap memory where objects will create and stores.
- If any of the object is noticed is null or no reference object then that is moved to GC

Which objects are eligible for GC:
------------------------------------

1. No reference object.
2. Null object.


*/


class studentData{
//public by default:class level data

id;
name;

//to initialize that data: constructor
constructor(id,name){

    this.id=id;
    this.name=name;
}

show(){
    console.log(this.id);
    console.log(this.name);
}

}

//object creation using new keyword
let s1=new studentData(101,"smitha");
s1.show();

console.log("--------------------------------");


class employee{
    id;
    fname;
profile;
city;


constructor(id,fname,profile,city)
{
    this.id=id;
    this.fname=fname;
    this.profile=profile;
    this.city=city;
}
}

//object

const e1=new employee(101,"smitha","QA","delhi");
console.log(e1.id);
console.log(e1.fname);
console.log(e1.profile);
console.log(e1.city);

console.log("---------------------");

const e2 = new employee(201,"om")
console.log(e2.id);
console.log(e2.fname);
console.log(e2.profile);//undefined
console.log(e2.city); //undefined


console.log("---------------------");

//no reference object

new employee(301,"kiran","Dev","LA");


//null object
let e3 = new employee(301,"kiran","Dev","LA");
e3=null;

console.log(e3.city); //TypeError: Cannot read properties of null (reading 'city')

 