let u1={
    name:"kiran"
}

let u2={
    name:"deepak"
}
let u3={
    name:"Anu"
}

console.log(u1); //kiran
console.log(u2); //deepak
console.log(u3); //Anu

console.log("------------------------");
u1=u2;
console.log(u1); //deepak
console.log(u2); //deepak
console.log(u3); //Anu

console.log("------------------------");

u2=u3;
console.log(u1); //deepak
console.log(u2); //Anu
console.log(u3); //Anu

console.log("------------------------");

u3=u1;
console.log(u1); //deepak
console.log(u2); //Anu
console.log(u3); //deepak