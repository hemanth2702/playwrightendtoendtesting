import { EmployeeData } from "./50_encapsulation.js";

//object
let l1 = new EmployeeData(101,"jay")
l1.getEmployeeDetails();


//using setters and getters we can call the data.
console.log(l1.getEsalary()); //50000 from imported data.
l1.setESalary(90000);
console.log(l1.getEsalary()); // 90000 from exported data.


