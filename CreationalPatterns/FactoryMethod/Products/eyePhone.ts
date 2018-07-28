import Gsm from "./GSM";

class EyePhone extends Gsm {

    constructor(weight: number, width: number, height: number) {
        const name: string = "EyePhone";
        super(weight, width, height, name);
    }

    start(): void {
        console.log(`Starting ${this.Name}`);
        console.log(`Weight: ${this.Weight}`);
        console.log(`Width: ${this.Width}`);
        console.log(`Height: ${this.Height}`);
    }
}

export default EyePhone;