import Calzone from "../Pizzas/calzone";
import CheesePizza from "../Pizzas/cheesePizza";
import PepperoniPizza from "../Pizzas/pepperoniPizza";
import PizzaFactory from "./pizzaFactory";

class PizzaDominos extends PizzaFactory {
    private readonly Name = "Pizza Dominos";

    CreateCalzone(): Calzone {
        const ingredients: string[] = [
            "rotten tomatoes", "greasy ham"
        ];
        return new Calzone(ingredients, this.Name);
    }

    CreateCheesePizza(): CheesePizza {
        const ingredients: string[] = [
            "rotten tomatoes", "grey cheese", "green cheese"
        ];
        return new CheesePizza(ingredients, this.Name);
    }

    CreatePepperoniPizza(): PepperoniPizza {
        const ingredients: string[] = [
            "old salami", "green tomatoes"
        ];
        return new PepperoniPizza(ingredients, this.Name);
    }
}

export default PizzaDominos;