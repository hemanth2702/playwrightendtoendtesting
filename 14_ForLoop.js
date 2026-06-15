/*
Loop
-------
for number of itterations we use loop

1. for loop:
-------------

when number of iterations are known/fixed
scenarios: calender/datepicker (28/29/30/31)
dropdown/menu/list fixed number options.
*/

//print hello 5 times

for(let i=1; i<=5; i++){
    console.log("Hello");
    
}

//print 1 to 10 numbers

for (let i=1; i<=10; i++){
    console.log(i);
}

//print 10 to 1 number

for (let i=10; i>=1;i--){
    console.log(i);
    
}

/*
FOR LOOP CONDITION IS ALWAYS TRUE
for(;;;)--> true will run infinite

*/

//print sum of 100 natural numbers
//1+2+3+4+...+100

    let sum = 0;
    for(let i=1;i<=100;i++){
        sum=sum+i;
    }
    console.log(sum); //5050

    //print factorial of 5

    let fact = 1;
    for(let i=5; i>=1;i--){
        fact=fact*i;
    }
    console.log(fact);