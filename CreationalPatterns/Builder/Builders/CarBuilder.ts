import VehicleBuilder from "./VehicleBuilder";
import Vehicle from "../Vehicle";

class CarBuilder extends VehicleBuilder {

    constructor() {
        super(new Vehicle("Car"));
    }
    
    BuildFrame(): void {
        this.Vehicle.AddPartById("Frame", "Car Frame");
    }

    BuildEngine(): void {
        this.Vehicle.AddPartById("Engine", "2500 cc");
    }

    BuildWheels(): void {
        this.Vehicle.AddPartById("Wheels", "4");
    }

    BuildDoors(): void {
        this.Vehicle.AddPartById("Doors", "4");
    }
}

export default CarBuilder;