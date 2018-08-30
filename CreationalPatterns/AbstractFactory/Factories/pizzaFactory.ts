import Calzone from "../Pizzas/calzone";
import CheesePizza from "../Pizzas/cheesePizza";
import PepperoniPizza from "../Pizzas/pepperoniPizza";

abstract class PizzaFactory {

    abstract CreateCalzone(): Calzone;

    abstract CreateCheesePizza(): CheesePizza;

    abstract CreatePepperoniPizza(): PepperoniPizza;
}

export default PizzaFactory;