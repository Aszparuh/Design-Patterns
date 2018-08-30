abstract class Pizza {

    constructor(private ingredients: string[]) {
    }

    protected abstract get Name(): string;

    private get Ingredients(): string[] {
        return this.ingredients;
    }

    public Show(): string {
        let result: string = "";
        result.concat(this.Name);
        result.concat("/n");
        result.concat(this.ingredients.join(", "));
        return result;
    }
}

export default Pizza;