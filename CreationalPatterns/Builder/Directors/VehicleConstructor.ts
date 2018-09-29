import IVehicleConstructor from "./IVehicleConstructor";
import VehicleBuilder from "../Builders/VehicleBuilder";

class VehicleConstructor implements IVehicleConstructor {
    
    Construct(vehicleBuilder: VehicleBuilder): void {
        vehicleBuilder.BuildFrame();
        vehicleBuilder.BuildEngine();
        vehicleBuilder.BuildWheels();
        vehicleBuilder.BuildDoors();
    }
}

export default VehicleConstructor;