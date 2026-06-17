/*
To get any element from array we use [index] bracket notation.

at()
-----
In Js to get the element based on negative index we use at(index)
postivie index
Negative index

array.slice(): return portion of array based index

return a copy of a section of a array. For both start and end, a negative index can be used to 
indicate an offset from the end of an array.
example: -2 refers to the second to the last element of the array.

syntax:
--------

slice(startindex,endindex): startposition and endposition-1

*/
        -5  -4  -3  -2   -1
let arr=[10, 20, 30, 40, 50]
//+index 0    1   2   3  4


//index
console.log(arr[4]);//50
console.log(arr[9]); //undefined
console.log(arr[-3]); //undefined

//at index
console.log(arr.at(4)); //50
console.log(arr.at(9)); //undefined
console.log(arr.at(-3)); //30



        -5  -4  -3  -2   -1
let id =[10, 20, 30, 40, 50]
//+index 0    1   2   3  4


//slice of 1 to 3
let slice1=id.slice(1,3);
console.log(slice1);

let slice2=id.slice(0,4);
console.log(slice2);

let slice3 = id.slice(3);
console.log(slice3);

let slice4 = id.slice(0);
console.log(slice4);

let slice5 = id.slice(-2);
console.log(slice5);

let slice6 = id.slice(-5);
console.log(slice6);

let slice7 = id.slice(1,6);
console.log(slice7);

let slice8 = id.slice(1,8);
console.log(slice8);







