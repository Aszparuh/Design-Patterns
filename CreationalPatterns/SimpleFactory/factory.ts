import { CoffeeType } from "./coffeeType";
import { Coffee } from "./coffee";

export class CoffeeFactory {
    public GetCoffee(type: CoffeeType): Coffee {
        switch(type) {
            case CoffeeType.REGULAR: {
                return new Coffee(0, 150);
            }
            case CoffeeType.DOUBLE: {
                return new Coffee(0, 200);
            }
            case CoffeeType.CAPPUCCINO: {
                return new Coffee(100, 100);
            }
            case CoffeeType.MACCHIATO: {
                return new Coffee(200, 100);
            }
            default: {
                throw Error("No such type of coffee");
            }
        }
    }
}