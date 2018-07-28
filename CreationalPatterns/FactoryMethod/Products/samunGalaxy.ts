import Gsm from "./GSM";

class SamunGalaxy extends Gsm {

    constructor(weight: number, width: number, height: number) {
        const name: string = "SamunGalaxy";
        super(weight, width, height, name);
    }

    start(): void {
        console.log(`Starting ${this.Name}`);
        console.log(`Weight: ${this.Weight}`);
        console.log(`Width: ${this.Width}`);
        console.log(`Height: ${this.Height}`);
    }
}

export default SamunGalaxy;