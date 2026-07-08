 /*
- A promise is an object used to manage asynchronous operation
- promise allows you to write code to continue after a specific event occur.
- promises enabled handling the data that is not currently available but will be available in the future.

A promise has 3 states.
1. pending.
2. resolve.
3. reject.

pending:
--------
This is the initial state where where the promise is neither fullfilled or rejected state.

fullfilled/resolve:
---------------------
This means async operation associated with promise has been successfully completed.

reject:
--------
This means async operation associated with promise has been rejected.

settled:
-----------
 - When promise is either fullfilled or rejected it enter the settled state.
 - In this state there are two important methods.

 1. then():
 ------------
 when promise successfully transition to the fullfill state, then method will allow you to
 specify a callback function that will work with completed data.
-  this is used to define what should happen when the successfull result is obtained.

2. catch();
--------------
When promise transition to the rejected state, the catch method will allow you to specify a callback 
function that will work with rejected data.
- this is used to handle where the operation fails.


*/

let mypromise= new Promise((resolve,reject)=>{
    let status=false;
    if(status){
        resolve("promise is pass");
    }else{
        reject("promise is fail");
    }
})
mypromise.then((success)=>{
    console.log("resolve state:"+success);
}).catch((fail)=>{
    console.log("resolve state: "+ fail);
    
})

//reject promise
let rejectPromise = new Promise((resolve,reject)=>{
    reject("promise is not completed");
    
})
rejectPromise.catch((error)=>{
    console.log("reject: "+ error);
    
})

//success
let successPromise = new Promise((resolve,reject)=>{
    resolve("promise is completed");
    
})
successPromise.then((success)=>{
    console.log("success:" + success);
    
})

//modren js

let p1 = Promise.resolve("promise pass");

p1.then((res)=>{
    console.log(res);
    
})

let p2 = Promise.reject("promise fail");
p2.catch((res)=>{
    console.log(res);
    
})

//promise with async method
 console.log("program starts....");

 let p3 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("test required 4sec to solve");
    },4000);
 })
 p3.then((res)=>{
    console.log("status:" + res);
 })

 console.log("program ends....");

 let p4 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        reject("program rejected after 3 sec...")
     },3000);
 })
 p4.catch((res)=>{
    console.log("status: "+ res);
    
 })

 //promise with function

 function getStatus(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("program needs 2sec to complete")
        },2000)
    })
 }
 let status=getStatus();
 console.log(status); //promise {<pending>}
 
 getStatus().then((res)=>{
    console.log(res);
    
 })

 async function testStatus() {
    let status= await getStatus();
    console.log(status);
    
 }
 testStatus();

 function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user={
                name:"jay",
                id=1010
            }
            resolve(user);
        },2000);
    })
 }

 getUser().then((result)=>{
        console.log("user found");
        console.log(result);
        
 })

 function getUserData()
 {
    return new Promise((resolve,reject)=>{
        let status=true;
    if(status){
        setTimeout(()=>{
            let user={
                name:"smita",
                id:1010
            }
            resolve(user);
        },2000);
    }else{
        setTimeout(()=>{
            reject("user not found")
        },2000);
    }
    
    })
}
getUserData().then((res)=>{
console.log(res);
}).catch((res)=>{
    console.log(res);
}).finally(()=>{
    console.log("Automation engineer found");
})

//output: since status is true: { name: 'smita', id: 1010 } and finnaly will execute Automation engineer found

