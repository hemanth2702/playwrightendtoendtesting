
class vehicle
{
    breakFeature(){
        console.log("car.... break");
        
    }
}
export class car extends vehicle
{
    price(){
        console.log("car......1L");
    }
    start(){
        console.log("car.....start");
        
    }
    refuel(){
        console.log("car.....refuel");
        
    }
    stop(){
        console.log("car....stop");
        
    }
}