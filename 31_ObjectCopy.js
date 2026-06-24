/*
To copy an array and object we have spread operator(...) in JS
*/

//array
let a1=[10,20,30,40,50];
let a2=[...a1,100];

console.log(a1);
console.log(a2);

let c1=[100,200,300];
let num=a1.concat(c1);
console.log(num);

let colors=["red","bule","yellow"];
let color=colors;
console.log(color);

console.log("======================");


let u1={
    id:101,
    name: "sumith"
}

let u2={...u1};
console.log(u1); //{ id: 101, name: 'sumith' }
console.log(u2); //{ id: 101, name: 'sumith' }

//modify u2
u2.id=201;
console.log(u2); //{ id: 201, name: 'sumith' }


