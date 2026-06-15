/*
simle if is used to validate the single condition
*/

//validate the current year.

let year =2027;

if(year ===2026){
    console.log("year match and current year is: " + year);
}
console.log("program ends here...");

/*
validate the baseurl address
url address should have protocol(http/https)
url should not be null

for string equality we use === strict equality
for partial string compaprision: includes ('partial string')
*/

let baseUrl = "https://www.google.com";
if(baseUrl.includes("https")){
    console.log("URL is as per standard");
    
}

let actualURL= "https://www.amazon.in";
let expectedURL = "https://www.amazon.in";

if(actualURL === expectedURL){
    console.log("Both URL matched...!");
    
}

let actualURL= "https://www.amazon.in";

if(actualURL !=null){
    console.log("URL is not null");
    
}