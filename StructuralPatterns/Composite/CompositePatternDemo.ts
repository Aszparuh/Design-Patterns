import IPatternDemo from "../../pattern";
import Commander from "./Commander";
import Soldier from "./Soldier";

class CompositePatternDemo implements IPatternDemo {
    show(): void {
        let king = new Commander("High king");
        let firstCommander = new Commander("Tyron");
        firstCommander.Add(new Soldier("Kiko"));
        firstCommander.Add(new Soldier("Stoicho"));
        firstCommander.Add(new Soldier("Pesho"));
        let secondCommander = new Commander("Snow");
        secondCommander.Add(new Soldier("Ivan"));

        king.Add(firstCommander);
        king.Add(secondCommander);
        king.Add(new Soldier("Guard"));

        king.Display("");
    }
}

export default CompositePatternDemo;