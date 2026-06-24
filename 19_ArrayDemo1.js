/*
Array:
------
Array is a dyanamic data structure in Js
Array is a collection of similar/different type of objects.
Array stores elements as per index and index starts from zero

Types of array:
----------------
1. Single diemensional array[1D]
2. Multi diemensional array[2]

ways to declare array:
----------------------
1. Array using literal.
2. Using Array constructor()
3. usinf Array.of() added after ES6

syntax: 
--------

let arrayVariableName=[1,2,3,4]

* Array supports length property
* Array supports multiple method.

Array Iterations:
-----------------

1. simple for loop.
2. For...of loop



*/

let id=[];
console.log(id);        //[]
console.log(typeof id);//object

let sid=[101,102,103,104,105];
console.log(sid.length); //5

console.log(sid[3]); //104
console.log(sid[5]); //undefined


//mixed type of array

let empData=['sarang','pune','53364434634',30,'M',true];
console.log("total entries:" + empData.length);  //6
console.log(empData);   //[ 'sarang', 'pune', '53364434634', 30, 'M', true ]



/*
constructor:
------------

Is used to initialize the object. 
constructor get called at the time of object creation.
In Java/Js language object creates with new keyword.

Array(): Array constructor.

*/

let arr=new Array(5); //here 5 is length of array
console.log("length of the array:" + arr.length);//5
console.log(arr);//[<5 empty string>]

//initialize array

arr[0]=101;
arr[1]=102;
arr[2]=103;
arr[3]=104;
arr[4]=105;
arr[5]=106;
 
console.log(arr); //[ 101, 102, 103, 104, 105, 106 ]
console.log(arr.length); //6

let arr1=new Array(10,20,30,40,50);  //here in array we have 5 entries
console.log(arr1.length);   //5
console.log(arr1);          //[ 10, 20, 30, 40, 50 ]

//Array.of()
let location= Array.of('pune','mumbai','delhi','LA');
console.log(location.length);  //4
console.log(location);  //[ 'pune', 'mumbai', 'delhi', 'LA' ]


//Multi diamentional array
let multiD=[
    ["Amith","test@123"],
    ["Ruchi","ruchi@123"],
    ["parag","test@123","test@gmail.com"],
    ["anitha","anitha@123"]
]
console.log("total number of rows:" + multiD.length); //4
console.log("total number of columns:" + multiD[0].length);//2
console.log("total number of row3: " + multiD[2].length);//3

//single entry
console.log(multiD[1][1]);//ruchi@123
console.log(multiD[2][2]);//test@gmail.com
//if we give wrong index undefined will display.
//[2][1] 2 is row and 1 ic column






