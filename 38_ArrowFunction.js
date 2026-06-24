console.log("------------This is arrow function---------");

let test1=()=>{
    console.log("this is arrow function");
}
test1();


console.log("---------Arrow function with parameter-------------");

let test2=(msg)=>{
    console.log("Given msg is:" + msg);
    
}
test2("Hello All");

//even number or not

let test3=(num)=>{
    if(num%2==0){
        console.log("Given number is even:" + num);
    }else{
        console.log("Given number is odd:" + num);
        
    }
}
test3(9);

//multiple parameter
let test4=(num1,num2)=>{
console.log("Addition of 2 numbers is:"+ (num1+num2));
}
test4(2,4);

console.log("Arrow function with parameter and return keyword");

//square of the number
let test5=(num)=>{
    return num*num;
}
let result=test5(4);
console.log(result);
