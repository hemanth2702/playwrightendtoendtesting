/*
Browser luanch scenario:
design function which accept browser name as parameter and  launch browser as
per name and return the value(boolean) form function  based on which we will open application

*/

console.log("-----function declaration------");

/**
 * 
 * @param {string} browserName 
 */
function launchBrowser(browserName){
    switch(browserName.toLowerCase().trim()){
        case "chrome":
            console.log("launch browser in chrome");
            return true;
            break;

        case "edge":
            console.log("launch browser in edge");
            return true;
            break;
          
        case "firefox":
            console.log("launch browser in firefox");
            return true;
            break;

        default:
            console.log("browser will not launch as it is invalid");
            return false;
                
    }
}
//call
let islaunchBrowser= launchBrowser("Edge");

if(islaunchBrowser)
{
    console.log("open application inside the browser");
    
}

console.log("---------------Anonymous function-----------------");


let initBrowser=function(bname){
    switch(bname.toLowerCase().trim()){
        case "chrome":
            console.log("launch browser in chrome");
            return true;
            break;

        case "edge":
            console.log("launch browser in edge");
            return true;
            break;
          
        case "firefox":
            console.log("launch browser in firefox");
            return true;
            break;

        default:
            console.log("browser will not launch as it is invalid");
            return false;
    }
}

let status=initBrowser("edge");
if(status){
    console.log("once browser open then launch the application");
    
}

console.log("----Arrow function-----");

let openBrowser=(bname)=>{
    switch(bname.toLowerCase().trim()){
        case "chrome":
            console.log("launch browser in chrome");
            return true;
            break;

        case "edge":
            console.log("launch browser in edge");
            return true;
            break;
          
        case "firefox":
            console.log("launch browser in firefox");
            return true;
            break;

        default:
            console.log("browser will not launch as it is invalid");
            return false;
    }
}

let isBrowserOpen=openBrowser("chrome");
console.log(isBrowserOpen);
