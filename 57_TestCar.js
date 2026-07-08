 import { car } from "./54_InheritanceCar.js";
 import { BMW } from "./55_BMW.js";
 import { Audi } from "./56_Audi.js";

 let c1 = new car();
c1.price();
c1.refuel();
c1.start();
c1.stop();
c1.breakFeature();

console.log("-----------------------------");

 let b1 = new BMW();
b1.autoengine();
b1.breakFeature();
b1.price();
b1.refuel();
b1.start();
b1.stop();

console.log("--------------------------");

 let a1 = new Audi();
 a1.autoGear();
 a1.breakFeature();
 a1.price();
 a1.refuel();
 a1.start();
 a1.stop();