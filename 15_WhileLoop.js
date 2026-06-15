/*
while loop
---------------
while loop is entry controlled loop
when number of iterations are not known/fixed
scenario: webpage(pagination)
every page load time (page load timeout)
some actions like click on arrow
*/

//print hello 5 times
let i = 1;
while(i<=5){
    console.log("Hello");  //hello will print 5 times
    i++;  
}


//sum of digits logic

let num=1020,rem,sum=0;
while(num>0){
    rem=num%10;
    console.log(rem);
    num=Math.floor(num/10);
    sum=sum+rem;
}
console.log("sum of digits are: " + sum);

//to reverse the number

let num=12345,rem,rev=0;
while(num>0){
    rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10+rem;
}
console.log("After reversing the number:" +rev);


//palindrome sequence

let  num=121,rem,rev=0;
let num1=121;
while(num>0){
    rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10+rem;
}
console.log("after reversing the number:" +rev);
if(num1===rev){
    console.log(num1+ ":It's a palindrome number");
    
}else{
    console.log(num1+ ": It's not a palindrome");
    
}

let digit=153,rem,rev=0;
let cube=0;
while(digit>0){
    rem=digit%10;
    digit=Math.floor(digit/10);
    rev=cube+rem;
    cube=rem*rem*rem;
    
}
console.log(rev);


let digit=153,rem,rev=0;
let cube=0;
rem=digit%10;
    digit=Math.floor(digit/10);
    cube=rem*rem*rem;
    console.log(rev);
    