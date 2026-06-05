console.log("---------Global space---------------");

var fname = "Hiteshi";
let location = "us";
const email = "hiteshi@gmail.com";

console.log("first name is:" +fname);
console.log("location is:" +location);
console.log("email is:" + email );
console.log(fname);


//inside function

function test1(){

    console.log("first name is:" +fname);
    console.log("location is:" +location);
    console.log("email is:" + email );

}
test1();

function test2(){
    var profile = "QA";
    let id = 101;
    const bname = "chrome";
    console.log("id is:" + id);
    console.log("browser name is:" +bname);
    
}

test2();

//if block

if(true)
{
    let toolName = "playwright"
    const vendor = "Microsoft";
    console.log("toolName is:" + toolName);
    console.log("vendor name is:" + vendor);

    
}

function test3(){
    var a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log("if block var type:" + a);
    }
    console.log("value of a:" +a);
    
}
test3();

// redeclaration

var tool = "selenium";
var tool = "cypress";
var tool = "playwright";
//reassignment
tool = "Appium";
console.log(tool);


let bookName="learn playwright";
//let bookName="learn javascript";  // syntax error: bookName has already been declared.
console.log(bookName);

const price= 1000;
//const price = 2000;syntax error: price has already been declared.
console.log(price);


//reassignment is allowed for let

let city ="bangalore";
city = "mysore";
console.log(city);

//reassignment for const is not allowed.

const version  = 1.5;
//version = 1.6; // type error: Assignment to const variable.
console.log(version);

function test4(){
    let a = 20;
    console.log(a);
    if(true)
    {
        let a = 30;
    console.log("block value is:" + a);
}
console.log("value of a is:" + a);
}
test4();