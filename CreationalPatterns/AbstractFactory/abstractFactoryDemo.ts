import IPatternDemo from "../../pattern";
import PizzaHut from "./Factories/pizzaHut";
import PizzaDominos from "./Factories/pizzaDominos";
import Calzone from "./Pizzas/calzone";

class AbstractFactoryPattern implements IPatternDemo {
    show(): void {
        const factoryHut: PizzaHut = new PizzaHut();
        const factoryDominos: PizzaDominos = new PizzaDominos();
        const hutCalzone: Calzone = factoryHut.CreateCalzone();

        console.log(hutCalzone.Show());
        console.log(factoryHut.CreateCheesePizza().Show());
        console.log(factoryHut.CreatePepperoniPizza().Show());
        console.log("------------------------------");
        console.log(factoryDominos.CreateCalzone().Show());
        console.log(factoryDominos.CreateCheesePizza().Show());
        console.log(factoryDominos.CreatePepperoniPizza().Show());
    }
}

export default AbstractFactoryPattern;