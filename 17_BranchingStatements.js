/*
Break:
------------
Break statement used to exit switch and loop statements.

continue:
---------
continue statement will skip certain part of the code and
 continue iteration till the end of that expression.

 reture
 --------
 during function

 */

 for(let i=1;i<=10;i++){
    if(i>=5){     //since =5 condition so 5 will also will not be printed
        break;
    }else{
        console.log(i);  //1 2 3 4
    }
 }


 for(let i=1; i<=10;i++){
    if(i==5){               
        break;        //if i = 5 then the condition will break till then it will run.
    }else{
        console.log(i); // 1 2 3 4
    }
 }

 for(let i=1;i<=10;i++){
    if(i>5){                //since it is greater than 5 it will run till 5
        break;
    }else{
        console.log(i);  //1 2 3 4 5
    }
 }

 for(let i=1;i<=10;i++){
    if(i===8){
        continue;  //since i is equal to i it will continue that means it will go and check the for loop
        //again so 8 will not print and it will skip the number 8
    }else{
        console.log(i);  //1 2 3 4 5 6 7 9 10
        
    }
 }

 /*
1. If URL of the application is not appropriate.
If the link doesn't contain http or https protocol then no need to test
this link.

2. All link should contain href attribute then skip that link.
 */


let i=1;
do{
    let url= "www.google.com";
    if(!(url.includes("http") || url.includes("https"))){
console.log("URL doesn't contain https or http");
        continue;
    }else{
        console.log("URL contains https or http");
        
    }
}while(i==10);


let i=1;
do{
    let href=null;
    if(href===null){
        console.log("href is null");
        continue;
    }else{
        console.log("href is not null");
        
    }
}while(i==10);