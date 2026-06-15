/*
String is immutable object and premitive data type in Js
string is collection of characters
strings are immutable and once value declare we cannot modify value of the string, if the value
is modified then internally in JS it will create a new address/object.


{'j','a','y'}
  0   1   2

  property: length

  Methods:
  1. includes()
  2. toUpperCase()
  3. toLowerCase()
  4. trim()
  5. chatAt()
  6. indexof()
  7. replace()
  8. startswith()
  9. endswith()
  10. split()      

  */

  let name="jay";
  console.log(name);        //jay
  console.log(typeof name); //string

  console.log(name[0]);
//name[2]='y; can't assign to read only property "2" to string "jay"

let s1="Hello";
let s2="Hello";
let s3="hello";
console.log(s1===s2);  //true
console.log(s1===s3); //false

//length property

let ss1="Hello All";
console.log("total length of the string is: " + ss1.length); //9

//toLowerCase() and toupperCase()
console.log(ss1.toLowerCase()); //hello all
console.log(ss1.toUpperCase()); //HELLO ALL

//trim(): ignore white space.

let ss2="Welcome All    "
console.log(ss2.trim());

//includes partial match
let info="playwright is webui and api testing framework"
console.log(info.includes("api")); //true
console.log((info.includes("mocha"))); //false








  


  