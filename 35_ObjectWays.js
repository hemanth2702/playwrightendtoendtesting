/*
ways to declare an object
-------------------------

1. object literal
2. using class
3. constructor function
4. using prototype based object(object interface)

*/

console.log("------object literal------------");


let user={
    id:101,
    name:"jay"
}

console.log(user);
console.log(typeof user);


console.log("-----------Class level object-----------");


class studentData{
    id;
    name;
    city;
    grade;

    constructor(id,name,city,grade){
        this.id=id;
        this.name=name;
        this.city=city;
        this.grade=grade;
    }

    getData(){
        console.log("Id is:" + this.id);
        console.log("name is:" + this.name);
        console.log("city is:" + this.city);
        console.log("grade is:" + this.grade);
        
    }
}

//object
let s1 = new studentData(101,"jay","pune","B");
s1.getData();


console.log("------constructor function-------------");

/*
constructor function is a special function which is used to create and initialize the object
*/

function add(){

}

function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.display = function () {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp1 = new Employee(101, "Hemanth", 50000);

emp1.display();


function employeeData(empId, empName){
    this.empId=empId;
    this.empName=empName;

    this.getDetails=()=>
    {
        console.log("empId is:" + this.empId);
        console.log("empName is:" + this.empName);
        
    }
}

let e1= new employeeData(1010,"hemanth");
e1.getDetails();




console.log("---------object create--------------");

/*
Based on prototype create() new object protype based object
*/

let product={
    pid:"product1",
    pname:"iphone",
    price:80900
}

let p1 = Object.create(product);

console.log(p1.pid);
console.log(p1.pname);
console.log(p1.price);

