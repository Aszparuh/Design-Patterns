import Pizza from "./pizza";

class CheesePizza extends Pizza {

    constructor(ingredients: string[], private madeBy: string) {
        super(ingredients);
    }

    protected get Name(): string {
        return `Cheese Pizza, made by ${this.madeBy}`;
    }
}

export default CheesePizza;