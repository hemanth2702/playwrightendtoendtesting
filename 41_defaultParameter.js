//to get a result with default data

function getData(name="priyanka")
{
    console.log("hello " + name);
    
}
getData("akul");
getData();



function launchBrowser(browserName="chrome"){
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
            console.log("Expected browser not found, browser launched with default browser");
            return true;
    }
}

let result=launchBrowser("safari");
console.log(result);
