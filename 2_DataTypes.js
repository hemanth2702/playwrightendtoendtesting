/*
Variable:
----------
Variable is a name of storage location where we can store the data.

To decalare variable:
----------------------
var (older)

modren JS
let(mutable data)
const(Immutable data)


syntax:
-----------

let/const variable=value

Example:
let age =26;
let name ="Hemanth";

Datatypes: 
-----------
datatype define the type of data which we can store into variable.
JS is dynamically type language so in this language we don't need
 to mention the data type for variable.

In Js everything is object(interface)
------------------------------------------
string/number/boolean/object/array...etc

JS suppots two types of datatype

primitive data type

1. Number
2. string
3.boolean
4. undefined
5. null

Added after Es6 but we don't use in automation.

6. Bigint
7. symbol

Non primitive data type(object reference details)

1. object 
2. array

Typeof operator:
--------------------

In Js to check data type of the variable we use typeof operator

*/






let num1=100;
console.log(num1);      //100
console.log(typeof num1); // number

let num2 = -100;
console.log(num2);          // -100
console.log(typeof num2);   //number

let num3 = 89.78
console.log(num3);          // 89.78
console.log(typeof num3);   //number

console.log("--------Boolean------------");

let isActive = true;
console.log("is student Active:" + isActive); //true
console.log("is student Active:", isActive);  //true
console.log(typeof isActive);                 //boolean

let Isemployeed=false;
console.log(Isemployeed);           //false
console.log(typeof Isemployeed);    //boolean

console.log("-------------string-------------");

let fname = 'jay';          //used single quotes
console.log(fname);         //jay
console.log(typeof fname);  //string

let lname = "Hemuuu";       //used double quotes
console.log(lname);         //Hemuu
console.log(typeof lname);  //string

let email = `jay@gmail.com`;    //used back tick
console.log(email);             // jay@gmail.com
console.log(typeof email);      // string

let profileData = `My name is Hemanth, having 3+ years of experience`;
console.log(profileData);           //My name is Hemanth, having 3+ years of experience
console.log(typeof profileData);    //string

/*
To read external data from variable data into template string.
use syntax: ${variableName}
*/

let cyear = 2026;
let diskSize = "2TB";

let requestPayload = `{
"name": "Apple MacBook Pro 16",
  "data": {
    "year": ${cyear},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size":${diskSize};
}
}`;

console.log(requestPayload);
console.log(typeof requestPayload);  //string

console.log("-----------undefined---------");

/*
when we declare the any variable without initialization 
then the value of that type variable will become undefined.

default value of variable is undefined.
*/

let dateOfBirth;
console.log(dateOfBirth);           //undefined
console.log(typeof dateOfBirth);    //undefined

console.log("-----------null--------------");

/*
Null means unknown data
for null variable type of variable will be object
this is introduced in Js as bug 
*/

let policyMaturityDate = null;
console.log(policyMaturityDate);        //null
console.log(typeof policyMaturityDate); //object

console.log("---------BigInt--------------");

console.log("Max number in JS:" + Number.MAX_VALUE);  // 1.7976931348623157e+308

//bigint need to add n as sufix to store large value.

let num = 8779890887766545343234234;
console.log(num);           //8.779890887766545e+24

let correctnum = 8779890887766545343234234n;
console.log(correctnum);        //8779890887766545343234234n
console.log(typeof correctnum); // bigint


console.log("------JS object-------");
//object leteral way
// object is a key value pair in JS
// In JS object we can defined with {}

let user = {}
console.log(user);          //{}
console.log(typeof user);   // object

let person = {

        fname : "sarang",
        id : 101
}

console.log(person);        // { fname: 'sarang', id: 101 }
console.log(typeof person); //object


console.log("----------symbol------------");

let profile1 = Symbol("QA");
console.log(profile1);          //symbole ("QA")
console.log(typeof profile1);   //symbol


let profile2 = Symbol("QA");
console.log(profile2);
console.log(typeof profile2);

//strict equality
console.log(profile1 === profile2);  //false


console.log("--------------------------");

//object literal

let product = {
    name: "iphone",
    price: 80000
};

console.log(product);           //{ name: 'iphone', price: 80000 }
console.log(typeof product);    // object

//access the properties from object
// 1 . dot notation
// 2 bracket notation

console.log(product.name);      //iphone
console.log(product["price"]);  // 80000

product.price = 90000; //update the price
console.log(product);   // { name: 'iphone', price: 90000 }


let id = symbol('pid');
product[id]=1010;
console.log(product);





