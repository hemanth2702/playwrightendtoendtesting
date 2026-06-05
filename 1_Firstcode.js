console.log("hello world");

let num =54477646634534534534534533n;
console.log(typeof num);
console.log(num);

let profile1 = Symbol("QA");
console.log(typeof profile1);
console.log(profile1);

var fname="Hiteshi";
let location="Us";
const email="hiteshi@gmail.com";

console.log("First name is: "+fname);
console.log("Location is: "+location);
console.log("Email is: "+email);

function test1()
{
    console.log("---Global data from function----");
    console.log("First name is: "+fname);
    console.log("Location is: "+location);
    console.log("Email is: "+email);    
}

//call
test1();

function test2()
{
    var profile="QA";//local data
    console.log("Profile is: "+profile);
    let id=101;
    const bname="chrome";
    console.log("id is: "+id);
    console.log("browsername is: "+bname);
    

    
    
}

test2();

console.log("-----outside of function----");

let c=100;
let c=200;
console.log(c);