import Manufacturer from "./Manufacturer";
import SamunGalaxy from "../Products/samunGalaxy";
import Gsm from "../Products/GSM";

class SamunComputers extends Manufacturer {

    public ProduceGSM(): Gsm {
        return new SamunGalaxy(20, 30, 40);
    }
}

export default SamunComputers;