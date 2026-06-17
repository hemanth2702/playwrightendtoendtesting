/*
Returns the position of the first occurance of a substring or -1 if not present.

*/

let month=["Jan","Feb","Mar","Apr","May","Jun","Apr","Jul","Apr"];
//index     0       1   2       3   4       5   6       7   8

let indexnum1=month.indexOf('Apr');
console.log(indexnum1);//3

console.log(month.indexOf('Aug'));//-1

//find the index of 2nd occurance of Apr
console.log(month.indexOf('Apr',indexnum1+1));//6

//find the last  entry of Apr
//lastIndexof(): will give the last entry of the value within the similar value

console.log(month.lastIndexOf('Apr'));


