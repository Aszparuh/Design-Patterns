abstract class Gsm {

    constructor(private weight: number, private width: number, private height: number, private name: string) {

    }

    public get Weight(): number {
        return this.weight;
    }

    public get Width(): number {
        return this.width;
    }

    public get Height(): number {
        return this.height;
    }

    public get Name(): string {
        return this.name;
    }

    abstract start(): void;
}

export default Gsm;