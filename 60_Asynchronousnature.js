// synchronous: line by line process

console.log("program starts......");

for (let i=1;i<=10;i++){
 console.log("welcome");
    
}
console.log("program ends......");


//Asynchronous: Task which needs extra time to finish.

console.log("program starts here.....");

//delays
setTimeout(()=>{
    console.log("task is completing in 3sec");
    
}, 3000);

console.log("program ends here.....");

/*
output:
--------
program starts here.....
program ends here.....
task is completing in 3sec
*/

let response = fetch("https://restful-booker.herokuapp.com/booking");
console.log(response); //promise {<pending>}

/*
In modren Js if any method is returned with promise{<any>}
then we have to handle with async/await keyword.

1. create a async function and then place a code inside that.
2. you nned to write await keyword before the method which returns the promise.

await can be used only in the async method.
*/

async function apiTest(){
    let response = await fetch("https://restful-booker.herokuapp.com/booking");
    console.log(response);
     
}
//call
apiTest();