import { car } from "./54_InheritanceCar.js";

export class BMW extends car //single level inheritance
{
    autoengine()
    {
        console.log("BMW....autoengine");
        
    }

    price(){
        console.log("BMW price.....50L");
        
    }
}