import Pizza from "./pizza";

class PepperoniPizza extends Pizza {

    constructor(ingredients: string[], private madeBy: string) {
        super(ingredients);
    }

    protected get Name(): string {
        return `Pepperoni Pizza, made by ${this.madeBy}`;
    }
}

export default PepperoniPizza;