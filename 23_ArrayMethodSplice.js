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
let deleteEntry1= fruits.splice(2,1);//[ 'Banana' ]
console.log(deleteEntry1);//[ 'Mango', 'Orange', 'Greps', 'Kiwi', 'Apple' ]
console.log(fruits);


//starts with 1 index and delete 2 entry
let deleteEntry2= fruits.splice(1,2);
console.log(deleteEntry2);//[ 'Orange', 'Greps' ]
console.log(fruits); //[ 'Mango', 'Kiwi', 'Apple' ]


//starts with 1 and delete 1 and inserts 2 more fruits
let deleteEntry3=fruits.splice(1,1,"orange","grapes");
console.log(deleteEntry3); //[ 'Kiwi' ]
console.log(fruits);  //[ 'Mango', 'orange', 'grapes', 'Apple' ]


let products=['mobile','laptop','mouse','keyboard','display'];

//we can add elements without deleting the elements
let deleteEntry4= products.splice(2,0,"printer","connector");
console.log(deleteEntry4);//[]
console.log(products);//'mobile','laptop','mouse','printer','connector','display'];


//-ve index
let deleteEntry5 = products.splice(-2,1,"processor");
console.log(deleteEntry5); ////[ 'keyboard' ]
console.log(products);//[  'mobile',  'laptop',  'printer',  'connector',  'mouse',  'Processor',  'display']

//delete count required it will not insert new entry
let deleteEntery6 = products.splice(-3,"mouse");
console.log(deleteEntery6);
console.log(products);//[ 'mobile', 'laptop', 'printer', 'Smartdevice', 'display' ]



