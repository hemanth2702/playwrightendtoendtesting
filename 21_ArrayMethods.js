
let color=["red","blue","yellow"];
console.log("total colors:" + color.length);//3
console.log(color);//[ 'red', 'blue', 'yellow' ]

//insert element and delete element

//push(): Appends new element at the end of the array and returns the new length of the array.
let addedcolor=color.push("Black","Orange");
console.log(color);//[ 'red', 'blue', 'yellow', 'Black', 'Orange' ]
console.log(addedcolor);


//unshift(): Inserts new element at the begining of the array and give the new length of the array
color.unshift("pink");
console.log(color);//[ 'pink', 'red', 'blue', 'yellow', 'Black', 'Orange' ]

//pop(): Removes the last element and gives the new length of the array. if the array is empty
//  then undefined will be displayed and array will not be modified.
let deletedColor1=color.pop();
console.log(deletedColor1);//Orange

//shift(): removes the first element of the array and give the new length of the array. 
// If the array is empty undefined will be displayed and array will not be modified 
//[ 'pink', 'red', 'blue', 'yellow', 'Black', 'Orange' ]
let deletedColor2=color.shift();
console.log(deletedColor2); //pink


//join(): Adds all the elements of an array into string. seperated by the specified saperator string.
let words=["Hello","all","welcome","to","learn","array"];
console.log(words);         //[ 'Hello', 'all', 'welcome', 'to', 'learn', 'array' ]
let string=words.join(" ");
console.log(string);        //Hello all welcome to learn array
console.log(typeof string); //string


//reverse(): Reverse the elements in an array. This method mutates the array and returns
//  a reference of the same array

let id=[10,20,30,40,50];
console.log(id);            //[ 10, 20, 30, 40, 50 ]
console.log(id.reverse());  // [ 50, 40, 30, 20, 10 ]

/*

spread operator(...)/Rest Parameter
-----------------------------------

Using spread operator we can store n number of entries 
for array we can even pass n number of parameters to function

How to copy array element ?
---------------------------

In Js using spread operator we can copy content of one array to another array. 
*/

let first=[10,20,30,40,50];
console.log(first);//[ 10, 20, 30, 40, 50 ]

let second=[...first];
console.log(second);//[ 10, 20, 30, 40, 50 ]

let third=[1,2,...second];
console.log(third);//[1, 2, 10, 20,30, 40, 50]

let fourth= [1,2,...first,60,70];
console.log(fourth);//[1, 2, 10, 20, 30, 40, 50, 60, 70]

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let arr3=[...arr1,...arr2];
console.log(arr3); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

//concate(): combines two or more array. This method gives new array without modifying the new existing array.

let arr4=arr1.concat(arr2);
console.log(arr4); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

