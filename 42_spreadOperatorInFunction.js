/*
rest parameter/ spread operator:
----------------------------------
spread operator(...) : array/function
Array: copy array
function: In function to provide n number of parameter we use spread operator.
In function we call it as rest parameters.

- This is usefull to design dynamic function which will access set of parameters.
-rest parameter should be last parameter of your function. 

*/

function getEmpData(name,id,...address){
    console.log(name + " : " + id + " : " + address);
    
}
getEmpData("jay",101,"UK","US"); //jay : 101 : UK,US
getEmpData("hemanth",102,"LA","UK","US"); //hemanth : 102 : LA,UK,US


function multiSelectDropdown(...city){
    console.log("selected cities: "+ city);
    
}

multiSelectDropdown("pune");
multiSelectDropdown("pune","mumbai","kolkata");
multiSelectDropdown("c1","c2","c3","c4","c5","c6")