//includes(): provides boolean value if the searching element is present inside the array.

let num=[10,20,30,40,50,60,70,80,90,100];

console.log("looking for number: "+ num.includes(30)); //true
console.log("looking for number: " + num.includes(100)); //true
console.log("looking for number:" + num.includes(130)); //false


