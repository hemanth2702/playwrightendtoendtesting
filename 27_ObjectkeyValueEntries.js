/*

In Js we have object interface
this interface has methods

1. keys()
2. values()
3. entries()

*/

let person={
    name:"pooja",
    age:26,
    address:"pune",
    skill:"playwright"
}

console.log(person);//{ name: 'pooja', age: 26, address: 'pune', skill: 'playwright' }

//keys(objectName)
let allKeys= Object.keys(person);
console.log(allKeys);


//values(objectName)
let allValues = Object.values(person);
console.log(allValues);


//entries(objectName)
let allEntries = Object.entries(person);
console.log(allEntries); /*[ 'name', 'pooja' ],
  [ 'age', 26 ],
  [ 'address', 'pune' ],
  [ 'skill', 'playwright' ]*/


