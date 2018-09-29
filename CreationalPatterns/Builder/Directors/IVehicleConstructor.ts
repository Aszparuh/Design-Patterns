import VehicleBuilder from "../Builders/VehicleBuilder";

interface IVehicleConstructor {
    Construct(vehicleBuilder: VehicleBuilder): void;
}

export default IVehicleConstructor;