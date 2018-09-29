import IPatternDemo from "../../pattern";
import VehicleConstructor from "./Directors/VehicleConstructor";
import ScooterBuilder from "./Builders/ScooterBuilder";
import MotorCycleBuilder from "./Builders/MotorCycleBuilder";
import CarBuilder from "./Builders/CarBuilder";

class BuilderPatternDemo implements IPatternDemo {
    show(): void {
        const constructor = new VehicleConstructor();
        let builder = new ScooterBuilder();

        constructor.Construct(builder);
        builder.Vehicle.Show();
        builder = new MotorCycleBuilder();
        constructor.Construct(builder);
        builder.Vehicle.Show();
        builder = new CarBuilder();
        constructor.Construct(builder);
        builder.Vehicle.Show();
    }
}

export default BuilderPatternDemo;