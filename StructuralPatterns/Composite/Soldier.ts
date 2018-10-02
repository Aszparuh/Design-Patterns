import Component from "./Component";

class Soldier extends Component {
    constructor(name: string) {
        super(name);
    }
    
    Display(prefixDepth: string): void {
        console.log(prefixDepth + this.Name)
    }
}

export default Soldier;