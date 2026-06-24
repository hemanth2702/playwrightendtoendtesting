/*
let keyword vs const keyword 
*/

//variable rule
let browserName="chrome";
const frameWorkName='mocha';
console.log(browserName);
console.log(frameWorkName);

console.log("-------------------------");

//redeclaration is not allowed
//let browserName="firefox"; //SyntaxError: Identifier 'browserName' has already been declared
//const frameWorkName ='mocha'; //SyntaxError: Identifier 'frameWorkName' has already been declared


//reassignment is allowed
browserName='firefox'; //reassignment allowed
frameWorkName='chai'; //TypeError: Assignment to constant variable.

console.log("------------------------------");

let user1={

    id:1010,
    name:"Hemanth"
}

console.log(user1); //{ id: 1010, name: 'Hemanth' }

//add
user1.phno=9876543210;

//modification
user1.id=1023;
console.log(user1); //{ id: 1023, name: 'Hemanth', phno: 9876543210 }

//delete
delete user1.phno;
console.log(user1); //{ id: 1023, name: 'Hemanth' }

//change reference
user1={address:"uk"}
console.log(user1); //{ address: 'uk' }


//const object make reference immutable

const user2={
    id:2020,
    name:"jay"
}

console.log(user2); // id: 2020, name: 'jay' }

//add
user2.phno=9876543210;

//modify
user2.id=2021;
console.log(user2); //{ id: 2021, name: 'jay', phno: 9876543210 }

//delete
delete user2.phno;
console.log(user2); //{ id: 2021, name: 'jay' }

//change reference
user2={address:"LA"};
console.log(user2); //TypeError: Assignment to constant variable.
