import SimpleFactoryPattern from "./CreationalPatterns/SimpleFactory/simpleFactoryPattern";
import AbstractFactoryPattern from "./CreationalPatterns/AbstractFactory/abstractFactoryDemo";
import IPatternDemo from "./pattern";
import FactoryMethodDemo from "./CreationalPatterns/FactoryMethod/factoryMethodDemo";
import BuilderPatternDemo from "./CreationalPatterns/Builder/BuilderPatternDemo";
import SingletonPatternDemo from "./CreationalPatterns/Singleton/SingletonPatternDemo";
import PrototypePatternDemo from "./CreationalPatterns/Prototype/PrototypePatternDemo";
import FluentInterfacePatternDemo from "./CreationalPatterns/Fluent Interface/FluentInterfacePatternDemo";
import FacadePatternDemo from "./StructuralPatterns/Facade/FacadePatternDemo";

declare var require: (moduleId: string) => any;
declare var process: any;

var readline: any = require("readline");

namespace Patterns {


    function printMenu(): void {
        var menu: string = "= Creational Patterns == \n" +
            "  1: Simple Factory \n" +
            "  2: Abstract factory \n" +
            "  3: Factory method \n" +
            "  4: Builder \n" +
            "  5: Singleton \n\n" +
            "  6: Prototype \n\n" +
            "  7: Fluent Interface \n\n" +
            "= Structural Patterns == \n" +
            "  8: Facade \n" +
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
                case 2: show(new AbstractFactoryPattern()); break;
                case 3: show(new FactoryMethodDemo()); break;
                case 4: show(new BuilderPatternDemo()); break;
                case 5: show(new SingletonPatternDemo()); break;
                case 6: show(new PrototypePatternDemo()); break;
                case 7: show(new FluentInterfacePatternDemo()); break;
                case 8: show(new FacadePatternDemo()); break;
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
