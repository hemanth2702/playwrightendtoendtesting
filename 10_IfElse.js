/*
By using if else we can validate both true and false condition
*/

//validate the given number is even or odd

let num=38;
if(num%2===0){
    console.log(num + ": Given number is even");
}else{
    console.log(num + ": given number is odd");
    
}

//testing api status code

let statusCode = 201;
if(statusCode===201){
    console.log(statusCode+ ": post call completed");
}else{
    console.log(statusCode + ": post call is not completed");
    
}

let responseCode = 244;
if(responseCode>=200 && responseCode<=299){
    console.log("This is sucesful response");
}else{
    console.log("This is not a succesful response");
    
}