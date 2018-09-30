import IPatternDemo from "../../pattern";
import Logger from "./Logger";

class SingletonPatternDemo implements IPatternDemo {
    show(): void {
        const logger = Logger.GetInstance();
        logger.SetToLog("First Message");

        const loggerTwo = Logger.GetInstance();
        loggerTwo.SetToLog("Second Message");

        const loggerThree = Logger.GetInstance();
        loggerThree.ShowEvents();
    }
}

export default SingletonPatternDemo;