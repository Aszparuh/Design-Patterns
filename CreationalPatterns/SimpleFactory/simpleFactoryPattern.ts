import { CoffeeFactory } from "./factory";
import { CoffeeType } from "./coffeeType";
import { Coffee } from "./coffee";
import { IPatternDemo } from "../../pattern";

class SimpleFactoryPattern implements IPatternDemo {
    public show(): void {
        const coffeeFactory: CoffeeFactory = new CoffeeFactory();

        const regularCoffee: Coffee = coffeeFactory.GetCoffee(CoffeeType.REGULAR);
        const doubleCoffee: Coffee = coffeeFactory.GetCoffee(CoffeeType.DOUBLE);
        const cappuccinoCoffee: Coffee = coffeeFactory.GetCoffee(CoffeeType.CAPPUCCINO);
        const macchiatoCoffee: Coffee = coffeeFactory.GetCoffee(CoffeeType.MACCHIATO);

        console.log(`Regular coffee quantity - ${regularCoffee.Quantity}ml and milk -${regularCoffee.Milk}ml`);
        console.log(`Double coffee quantity - ${doubleCoffee.Quantity}ml and milk -${doubleCoffee.Milk}ml`);
        console.log(`Cappuccino coffee quantity - ${cappuccinoCoffee.Quantity}ml and milk -${cappuccinoCoffee.Milk}ml`);
        console.log(`Macchiato coffee quantity - ${macchiatoCoffee.Quantity}ml and milk -${macchiatoCoffee.Milk}ml`);
    }
}

export default SimpleFactoryPattern;