import VehicleBuilder from "./VehicleBuilder";
import Vehicle from "../Vehicle";

class ScooterBuilder extends VehicleBuilder {
    constructor() {
        super(new Vehicle("Scooter"));
    }
 
    BuildFrame(): void {
        this.Vehicle.AddPartById("Frame", "Scooter Frame");
    }    
     
    BuildEngine(): void {
        this.Vehicle.AddPartById("Engine", "50 cc");
    }
     
    BuildWheels(): void {
        this.Vehicle.AddPartById("Wheels", "2");
    }
     
    BuildDoors(): void {
        this.Vehicle.AddPartById("Doors", "None");
    }
}

export default ScooterBuilder;