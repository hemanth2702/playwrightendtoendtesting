/*
 To create immutable where we cannot perform any operations on that object there we use

 1. freeze():
 ----------------
 syntax: object.freeze(variable name)

- Here we cannot add, modify and delete the values.

2. seal():
--------------
syntax: object.seal(variable name)

We can modify existing properties but adding new property or deleting the existing property is not allowed.
*/

//full object as immutable

const person={
    id:1010,
    name: "Hemanth"
}

console.log(person);        //{ id: 1010, name: 'Hemanth' }
console.log(typeof person); //object

Object.freeze(person);  //object become mmutable

//add new property
//person.phno=9876543210; //TypeError: Cannot add property phno, object is not extensible

//modify property
person.id=1012;
//console.log(person); //TypeError: Cannot assign to read only property 'id' of object '#<Object>'


//delete the property
delete person.phno;
console.log(person); //TypeError: Cannot assign to read only property 'id' of object '#<Object>'

console.log("-------------------------");


const browser={
    name: "chrome",
    version: 145
}

console.log(browser);       //{ name: 'chrome', version: 145 }
console.log(typeof browser); //object


Object.seal(browser);

//add property
// browser.vendor="google";
// console.log(browser);  //TypeError: Cannot add property vendor, object is not extensible

//modify property
browser.version=146;
console.log(browser); // { name: 'chrome', version: 146 }


//delete property
delete browser.vendor;
console.log(browser); //{ name: 'chrome', version: 146 }

