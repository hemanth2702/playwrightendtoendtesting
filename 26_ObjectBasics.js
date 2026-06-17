/*
Everything in Js is dyanamic object
object in Js enclosed with {}
js object can have data property with {key:value} form
and object can have method.

In Js all the key are by default string and all the values are original value.

ways to declare an object
--------------------------

1. object literal
2. Using class (added after ES6)
3. Constructor function  (added after ES6)
4. Using prototype pased object (object interface)


Class:
------
class is template to describe the propereties of an object.
class is group of similar type of object.

object is any real world entity which has its state and behaviour.

*/


//object literal

let user={};
console.log(user);//{}
console.log(typeof user);//object

let person={

    fname:"sarang",
    age:25,
    address:"pune",
    isEmployee:true
}

console.log(person);// fname: 'sarang', age: 25, address: 'pune', isEmployee: true }
console.log(typeof person);//object


/*
How to read single property from the object
1. (.) dot notation
2. [] bracket notation

objectName.key
objectName['key']
*/

console.log("person name is:" + person.fname);//sarang
console.log("Is person employed: "+ person.isEmployee);//true

//bracket notation
console.log(person['age']);
console.log(person['address']);


//add new properties to the object
person.phNo=8578578765;
console.log(person);

//modify the properties of the object
person.address='Mumbai';
console.log(person);

//to delete the property of the object
delete person.phNo;
console.log(person);

/*
Iteration of object
for...in loop
--------------
Iterates over keys and index

*/

for(let i in person){
    console.log(i);
    
}

for(let key in person){
    console.log(person[key]);
    
}



