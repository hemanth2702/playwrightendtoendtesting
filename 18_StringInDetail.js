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

//trim(): ignore white space. it will not remove the space inbetween.

let ss2="Welcome All    "
console.log(ss2.trim());

let ss3="gsgsgsd";
console.log(ss3.trim());


//includes partial match
let info="Playwright is webui and api testing framework"
console.log(info.includes("api")); //true
console.log((info.includes("mocha"))); //false


//startswith(prefix) and endswith(suffix)
let info="Playwright is webui and api testing framework"
console.log("string starts with: " +info.startsWith("Playwright"));  //true
console.log("string starts with: " + info.startsWith("playwright")); //false
console.log("string starts with: " + info.startsWith("Play"));        //true
console.log("string starts with: " + info.startsWith("P"));           //true

console.log("string ends with: " + info.endsWith("framework")); //true
console.log("string ends with: " + info.endsWith("work"));      //true
console.log("string ends with: " + info.endsWith("k"));         //true
console.log("string ends with: " + info.endsWith("frame"));     //false


//charAt(index): As per the index we can retrieve the character from the string.
// returns the character at the specified index.

let ss3= "Hello All";
//index   012345678
console.log("get the character at the index: " + ss3.charAt(1)); //e
console.log(ss3.charAt(9));  // if we give the character that doesn't exist it will return empty string.
console.log(ss3.charAt());  //if we pass empty inside index it will consider as index zero


//indexof('string/char'): returs index number of given character/string.
//returs the position of the first occurance of the substring, if not present then it will return -1

let ss4 = "selenium webdriver is webui automation tool";
console.log("Index number of character e: " + ss4.indexOf('e')); //1 1st e index position is 1
console.log("Index number of character z:" + ss4.indexOf('z'));  // -1 because z is not present in the string

let fo= ss4.indexOf('e');
console.log(fo);  //1 index
//second occurance of e
let so=ss4.indexOf('e',fo+1);
console.log(so);  //3 index
//third occurance of e
let to=ss4.indexOf('e',so+1);
console.log("third occurance of index: " + to);//10

//get third index value
console.log("third occurance index of e: " + ss4.indexOf('e',4)); //10
//here ('e',4) here next character 'e' will be start searching from the 4th index.


//lastindexof(): return last index occurance for any character.
console.log("last index of e: " + ss4.lastIndexOf('e')); //23

//how to count number of occurance for an character
let ss5 = "selenium webdriver is webui automation tool";
let count=0;
for(let i=0;i<ss5.length; i++){
let ch=ss5.charAt(i);
if(ch=='e'){
count++
}
}
console.log("total count: "+ count);


//replace('to be replaced value','new value'):
//here we can replace any of the string value with new value.

let sentence="Automation Testing is important and Automation Testing with modern tool is more important";

console.log(sentence.replace('Testing','#####')); //here only 1st matching value will be replaced and rest will be remain same.

//concat(): strings to append to the end of the string.

let ss6="Hello";
let ss7="All";
console.log(ss6+" "+ss7);           //Hello All
console.log(ss6,ss7);               //Hello All
console.log(ss6.concat(" "+ ss7));  //Hello All

//split(): return string array


let allTools="Selenium,Appium,Cypress,Postman,Playwright";
  //index       0       1       2       3       4

  let tools=allTools.split(",");
console.log(tools);   //[ 'Selenium', 'Appium', 'Cypress', 'Postman', 'Playwright' ]

  //to get the index value
console.log(tools[2]);  //Cypress

let date="13-June-2026";
let day=date.split("-")[0];
let month=date.split("-")[1];
let year=date.split("-")[2];

console.log(day);   //13
console.log(month); //june
console.log(year);  //2026

//reverse

let info1="Hello All"
console.log(info1);  //Hello All
let rev="";
for(let i=info1.length-1;i>=0;i--){
  rev=rev+info1.charAt(i);
}
console.log(rev); //llA olleH

let ss5 = "selenium webdriver is webui automation tool";
console.log(ss5.length);

let count=0;
for(let i=0;i<ss5.length; i++){
let ch=ss5.charAt(i);
count++
}
console.log("total count: "+ count);

//even index to uppercase and odd index to lower case 
let name ='hemanth';
let result=""
for(let i=0;i<name.length;i++){
  if(i%2===0){
    result=result+name[i].toUpperCase();
  }else{
    result=result+name[i].toLowerCase();
  }
}
console.log(result);















  


  