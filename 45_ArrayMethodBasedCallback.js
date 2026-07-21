/*
1. forEach():Iteration and basic operation.
2. map(): transform the array element.
3. filter(): search element from the group of element.
4. reduced(): reduce array element in one form
*/

let arr=[1,2,3,4,5];

for(let i of arr){
    console.log(i);
    
}

///forEach calls the callback function one time for each element in the array.
console.log("--------------------------");

let arr=[1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num*num*num);
})

//map(): transform the array elements
//calls a defined callback function on each element of an array, and returns an array that contains the result.

let city=["mumbai","delhi","pune"];
//convert every element into lower case

let finalCity=city.map(cname=>cname.toLowerCase());
console.log(finalCity);

let footerLinks=["aboutus","privacy policy","Help"];
console.log(footerLinks); //[ 'aboutus', 'privacy policy', 'Help' ]

let allLinks=footerLinks.map(link=>"amazon "+link);
console.log(allLinks); //[ 'amazon aboutus', 'amazon privacy policy', 'amazon Help' ]




//square of the number

let num=[10,20,30,40,50,60];
console.log(num);

num.map((num)=>{
    console.log(num*num);
})


console.log("-----------------------------");

//3. filter(): search element from group of element.
//returns the element of an array that met the specified condition of the callback function.

let elements=[1,2,3,4,5,6,7,8,9,10];
console.log(elements);

let evenNumbers=elements.filter(num=>num%2===0);
console.log(evenNumbers); //[ 2, 4, 6, 8, 10 ]

console.log("-------------------------");

let products=["Keyboard","Display","Printer","Mouse","Printer"];

let matchElement=products.filter((ele)=>{
    if(ele==="Printer"){  //if case mismatch then reference error will display
        return ele;
    }
})
console.log(matchElement);

console.log("-----------------------------");

// 4. reduced(): reduce array element in one form 
//sum of elements of the array/avg of elements.

let data=[10,20,30,40,50];

let sum=0;
for(let i of data){
    sum=sum+i;
}
console.log(sum);

console.log("---------------------------");

let data=[10,20,30,40,50];
let sumOfElements=data.reduce((sum,num)=>sum+num,0);
console.log(sumOfElements);
/*
here sum = Accumulator-->stores the running total
num = holds the current value from the array
0 = Initial value of sum
array.reduce((accumulator, currentValue) => {
*/

//string array- calculate the total length of characters of all the string

let data2=["hello","Hi","welcome"];

let total=0;
for (let i of data2){
    total=total+i.length;
}
console.log(total); //14

let totalCount=data2.reduce((total,str)=>total+str.length,0);
console.log(totalCount); //14
