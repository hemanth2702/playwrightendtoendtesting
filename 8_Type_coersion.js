/*
Type casting:
-------------
one type of data is cinverted into another type is called type casting.

Two types:
-----------
1. Implicit type casting:  In Js, type will be automatically converted into other type if it is compatible.
It is the responsibility of Js Engine.

2. Explicit type casting: It is manual conversion and based on requirement we do it.
Number() constructor
String()
Boolean()

constructor:
------------
it is a special method which is responsible to initialize the object.
In class structure we use constructor.


Boolean conversion:
--------------------
truthy and falsy value

-Any value which is true in boolean context is called truth value.
eg: any non empty string and non zero numbers.

- Any value which is false in boolean context is called falsy value.
eg: 0,NaN,unefined, null,""

*/

let a= "hello" + 190; // here 190 is converted into string "190"
console.log(a);         // hello190
console.log(typeof a);  // string

let b = "10"+20+50; //here 20 and 50 are converted into string.
console.log(b); // 102050
console.log(typeof b); // string

let c = true+50+"100"; // here true(1)+50=51 then 51 is converted into string.
console.log(c); // 51100
console.log(typeof c); //string

let d="90"+true+45+"10"; // here true and 45 will be converted into string
console.log(d); // 90true4510
console.log(typeof d); // string

console.log("------------Number conversion--------------");

/*
string/boolean --->converted into number.
when any expression written with string/number/boolean and operators like +,-,*,%,/ 
then string(compatible)/boolean will be converted into number.

*/

let i = "100"/10; // here "100" will be converted into number 100
console.log(i); // 10   //10
console.log(typeof i); // number

let j="hi"/5; // here hi is not compatible with number so it will not be converted.
console.log(j); //Not a number
console.log(typeof j); //number

let r =90-"30"*true; //here "30" will be converted into 30 90-30*1=60
console.log(r);  //60
console.log(typeof r); //number

let y="78"-15+100+"56"; //here "78" is converted into number 78-15+100=163 then 
//163 is converted into string 16356
console.log(y); //16356
console.log(typeof y); //string

console.log("-------------------------------");


//string(compatible) to number.
let t="1234";
console.log(typeof t); //string
let stringToNumber = Number(t); // "1234" string value will be converted into number 1234
console.log(stringToNumber);  //1234
console.log(typeof stringToNumber); //number

console.log("-------------------------------");


//number/boolean to string:
let num =89;
console.log(typeof num); //number
let numberToString = String(num); // here num 89 will be converted into string "89"
console.log(numberToString); //"89"
console.log(typeof numberToString); //string


console.log("-------------------------------");

//number conversion
console.log(Number("389")); //389
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number("Hello")); //NaN


console.log("-------------------------------");

/*
Scenario: Amount validation
"your total amount 5000"
validate this bill message that amount should be less than 10000
*/


let bill = "your total amount  is 5000";
// index     0    1     2      3    4

//extract the 5000 from the bill 
let data = bill.split(" ")[5]; // it will saperate the string into array words
//("") will saperate the leters and (" ") will saperate the words.
console.log(data); //"5000"
console.log(typeof data); // string

//string will be converted into number
let amount = Number(data);
console.log(amount);        //5000  
console.log(typeof amount); //Number

//validate if amount is less than 10000
//conditional statement

if(amount<10000){
    console.log("Amount is matched...Test pass!");
} else{
    console.log("Amount is not matched..Test Failed");
    
}
    

//Boolean conversion

console.log(Boolean("Jay")); //true
console.log(Boolean(12345)); //true
console.log(Boolean(56.77)); //true
console.log(Boolean(true)); //true

console.log(Boolean(""));  //empty string false
console.log(Boolean(0)); // false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN));  //flase

















