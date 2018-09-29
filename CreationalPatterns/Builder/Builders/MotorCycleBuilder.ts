import VehicleBuilder from "./VehicleBuilder";
import Vehicle from "../Vehicle";

class MotorCycleBuilder extends VehicleBuilder {

    constructor() {
       super(new Vehicle("Motorcycle"));
    }

    BuildFrame(): void {
        this.Vehicle.AddPartById("Frame", "Motorcycle Frame");
    }    
    
    BuildEngine(): void {
        this.Vehicle.AddPartById("Engine", "500 cc");
    }
    
    BuildWheels(): void {
       this.Vehicle.AddPartById("Wheels", "2");
    }
    
    BuildDoors(): void {
        this.Vehicle.AddPartById("Doors", "None");
    }
}

export default MotorCycleBuilder;