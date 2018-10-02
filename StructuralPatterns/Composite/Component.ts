abstract class Component {
    private name!: string;

    protected constructor(name: string) {
        this.SetName(name);
    }

    private  SetName(name: string) {
        this.name = name;
    }

    get Name(): string {
        return this.name;
    }
    
    abstract Display(prefixDepth: string): void;
}

export default Component;