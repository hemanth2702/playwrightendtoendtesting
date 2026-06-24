/*
IIFE: Immediate Invoke function expression

*/

(function(){
    console.log("Hello All");
    
})();

(function(name){
    console.log("Hello "+ name);
    
})("sumith");

((num)=>{
    console.log(num*num);
    
})(10);

/**
 * s
 */
(function(browserName){
    switch(browserName.toLowerCase().trim()){
        case "chrome":
            console.log("Launch chrome browser");
            //return true;
            break;

        case "edge":
            console.log("Launch Edge browser");
            //return true;
            break;

        case "firefox":
            console.log("Launch Firefox browser");
            //return true;
            break;

        default:
            console.log("Expected browser not found and session started with Chrome browser");
           // return true;
    }
})("edge");