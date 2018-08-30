import Pizza from "./pizza";

class Calzone extends Pizza {

    constructor(ingredients: string[], private madeBy: string) {
        super(ingredients);
    }

    protected get Name(): string {
        return `Calzone, made by ${this.madeBy}`;
    }
}

export default Calzone;