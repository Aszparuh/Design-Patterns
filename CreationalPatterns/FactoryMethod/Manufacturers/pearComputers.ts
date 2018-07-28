import Manufacturer from "./Manufacturer";
import Gsm from "../Products/GSM";
import EyePhone from "../Products/eyePhone";

class PearComputers extends Manufacturer {
    public ProduceGSM(): Gsm {
        return new EyePhone(20, 30, 40);
    }
}

export default PearComputers;