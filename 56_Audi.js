
import { car } from "./54_InheritanceCar.js";

export class Audi extends car
{
    autoGear(){
        console.log("Audicar......autogear");
        
    }
    price(){
        console.log("audi price.....40L");
        
    }
}