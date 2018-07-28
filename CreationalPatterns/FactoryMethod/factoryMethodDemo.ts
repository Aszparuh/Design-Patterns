import IPatternDemo from "../../pattern";
import PearComputers from "./Manufacturers/pearComputers";
import Manufacturer from "./Manufacturers/Manufacturer";
import SamunComputers from "./Manufacturers/samunComputers";
import Gsm from "./Products/GSM";

class FactoryMethodDemo implements IPatternDemo {
    show(): void {
        const pearManufacturer: Manufacturer = new PearComputers();
        const samunnManufacturer: Manufacturer = new SamunComputers();

        const samunGalaxy: Gsm = pearManufacturer.ProduceGSM();
        const eyePhone: Gsm = samunnManufacturer.ProduceGSM();

        samunGalaxy.start();
        eyePhone.start();
    }
}

export default FactoryMethodDemo;