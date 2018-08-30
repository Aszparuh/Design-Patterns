import Calzone from "../Pizzas/calzone";
import CheesePizza from "../Pizzas/cheesePizza";
import PepperoniPizza from "../Pizzas/pepperoniPizza";
import PizzaFactory from "./pizzaFactory";

class PizzaHut extends PizzaFactory {
    private readonly Name: string = "Pizza Hut";

    CreateCalzone(): Calzone {
        const ingredients: string[] = [
            "tomatoes", "ham", "bacon"
        ];
        return new Calzone(ingredients, this.Name);
    }

    CreateCheesePizza(): CheesePizza {
        const ingredients: string[] = [
            "tomatoes", "white cheese", "yellow cheese", "blue cheese", "extra smelly cheese"
        ];
        return new CheesePizza(ingredients, this.Name);
    }

    CreatePepperoniPizza(): PepperoniPizza {
        const ingredients: string[] = [
            "tomatoes", "pepperoni", "salami"
        ];
        return new PepperoniPizza(ingredients, this.Name);
    }
}

export default PizzaHut;