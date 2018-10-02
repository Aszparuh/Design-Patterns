import IPatternDemo from "../../pattern";
import HomeTheater from "./HomeTheater";

class FacadePatternDemo implements IPatternDemo {
    show(): void {
        const theater = HomeTheater.GetInstance();
        theater.StartHomeTheater();
    }
}

export default FacadePatternDemo;