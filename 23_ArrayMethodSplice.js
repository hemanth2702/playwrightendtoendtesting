/*
splice()
--------------

Using this method we can remove element from any position and we can add element to a 
removed position as a replacement into an array.

removes element from an array and, if necessary, inserts new elements in their 
place returning the deleted elements.

syntax:
---------

splice(startindex,deletecount, replaceelement)

*/

let fruits=['Mango','Orange','Banana','Greps','Kiwi','Apple'];
//  index       0       1       2       3       4       5

//start with 2 index and delete 1 entry
let deleteEntry1= fruits.splice(2,1);
console.log(deleteEntry1);
console.log(fruits);


//starts with 1 index and delete 2 entry
let deleteEntry2= fruits.splice(1,2);
console.log(deleteEntry2);
console.log(fruits);


//starts with 1 and delete 1 and inserts 2 more fruits
let deleteEntry3=fruits.splice(1,1,"orange","grapes");
console.log(deleteEntry3);
console.log(fruits);





