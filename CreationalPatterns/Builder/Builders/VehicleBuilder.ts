import Vehicle from "../Vehicle";

abstract class VehicleBuilder {
    private vehicle: Vehicle;
 
    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle;
    }
    
    get Vehicle(){
        return this.vehicle;
    }
    
    set Vehicle(v : Vehicle){
        this.vehicle = v;
    }
    
    abstract BuildFrame(): void;

    abstract BuildEngine(): void;

    abstract BuildWheels(): void;

    abstract BuildDoors(): void;
}

export default VehicleBuilder;