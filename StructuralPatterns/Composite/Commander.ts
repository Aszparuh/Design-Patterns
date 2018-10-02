import Component from "./Component";

class Commander extends Component {
    private subjects: Array<Component>; 

    constructor(name: string) {
        super(name);
        this.subjects = new Array<Component>();
    }

    Add(component: Component): void {
        this.subjects.push(component);
    }

    Remove(component: Component): void {
        let index = this.subjects.indexOf(component);
        if (index > -1) {
            this.subjects = this.subjects.splice(index, 1);
        }
    }

    Display(prefixDepth: string): void {
        console.log(prefixDepth + this.Name);
        for (const subject of this.subjects) {
            subject.Display(prefixDepth + "   ")
        }
    }
}

export default Commander;