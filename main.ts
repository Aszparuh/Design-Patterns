import SimpleFactoryPattern from "./CreationalPatterns/SimpleFactory/simpleFactoryPattern";
import { IPatternDemo } from "./pattern";

declare var require: (moduleId: string) => any;
declare var process: any;

var readline: any = require("readline");

namespace Patterns {


    function printMenu(): void {
        var menu: string = "= Creational Patterns == \n" +
            "  1: SimpleFactory \n" +
            "  2: Abstract factory \n" +
            "  3: Factory method \n" +
            "  4: Builder \n" +
            "  5: Prototype \n\n" +
            "= Structural Patterns == \n" +
            "  6: Adapter \n" +
            "  7: Bridge \n" +
            "  8: Composite \n" +
            "  9: Decorator \n" +
            " 10: Facade \n" +
            " 11: Flyweight \n" +
            " 12: Proxy \n\n" +
            "= Behavioral Patterns == \n" +
            " 13: Chain of responsibility \n" +
            " 14: Command \n" +
            " 15: Interpreter \n" +
            " 16: Iterator \n" +
            " 17: Mediator \n" +
            " 18: Memento \n" +
            " 19: Observer \n" +
            " 20: State \n" +
            " 21: Strategy \n" +
            " 22: Template method \n" +
            " 23: Visitor \n";


        console.log("\n\n");
        console.log("==== Choose one pattern to demonstrate ====");
        console.log("\n");
        console.log(menu);
    }

    export function menu(): void {
        var rl: any = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        printMenu();
        rl.question("Which pattern would you like to check?   ", function (answer: string): void {
            switch (+answer) {
                case 1: show(new SimpleFactoryPattern()); break;
                default: break;
            }

            rl.close();
        });
    }

    function show(pattern: IPatternDemo): void {
        pattern.show();
    }
}

Patterns.menu();