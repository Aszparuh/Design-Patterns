export class Coffee {
    private milk!: number;
    private quantity!: number;

    constructor(milk: number, quantity: number) {
        this.Milk = milk;
        this.Quantity = quantity;
    }

    public get Milk(): number {
        return this.milk;
    }

    public set Milk(value: number) {
        if (value < 0) {
            throw Error("Milk can not be negative");
        }

        this.milk = value;
    }

    public get Quantity(): number {
        return this.quantity;
    }

    public set Quantity(value: number) {
        if (value < 0) {
            throw Error("Quantity can not be negative");
        }

        this.quantity = value;
    }
}
