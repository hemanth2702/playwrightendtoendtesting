/*

Destructuring:
----------------
It's a clean way to extract elements/values from array/object 
and assign it to a variable in a single line.
*/

let arr=[10,20,30];

//destructuring

let [a1,a2,a3]=arr;
console.log(a1);
console.log(a2);
console.log(a3);


console.log("--------------------------");

let [...pop]=[1,2,3,4,5,6,7,8,9,10];
console.log(pop);

console.log("--------------------");

let user={
    name:"sarang",
    age:30,
    city:"delhi",
    phno:9876543210,
    role:"QA"
}

//destructure
// for array we need to use [ ] and for object { }

let{name,age,city,phno,role}=user;
console.log(city);


console.log("-------------------------");

let customer={
    name: "pooja",
    age:30,
    address:"pune",
    phno:9876543210,
    postalCode:465545,
    cid:6878

}

function placeOrder({name,address,phno,postalCode}){
    console.log(name);
    console.log(address);
    console.log(phno);
    console.log(postalCode);
    
}
placeOrder(customer);