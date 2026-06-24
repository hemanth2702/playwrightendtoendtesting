/*
In real time we need to convert JSON string into JS object and viceversa

1. JS Object----> JSON string
stringyfy()
convert JS object into java script object notation(JSON) string

2. JSON String----> JS object
parse()
convert javascript object notation into an object
*/

//js object to js string

let user={
    id:101,
    name:"hemanth"
}
console.log(user); //{ id: 101, name: 'hemanth' }
console.log(typeof user); //object

//js object to json string
let jsToJson = JSON.stringify(user);
console.log(jsToJson);  //{"id":101,"name":"hemanth"}
console.log(typeof jsToJson); //string


//json string to js object

let user2=`{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}`;

console.log(user2);
console.log(typeof user2); //string


let jsonTOJs=JSON.parse(user2);
console.log(jsonTOJs);
console.log(typeof jsonTOJs); //object
