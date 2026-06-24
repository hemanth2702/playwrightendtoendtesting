/*
for...of loop:
--------------

-this loop iterates over value
-this loop applicable to array and string

for...in loop:
---------------

- this loop iterates over index.
-this looop applicable for object.

*/

let arr=[10,20,30,40,50];
console.log(arr);

console.log("-------simple loop--------");

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);  //10 20 30 40 50
    
}

console.log("--------for...of loop---------");
for(let i of arr){
    console.log(i); // 10 20 30 40 50
    
}

console.log("----------for...in loop-------");
for(let i in arr){
    console.log(i);  //0 1 2 3 4 
    
}
