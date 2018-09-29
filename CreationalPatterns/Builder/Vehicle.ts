class Vehicle {

    private readonly vehicleType: string;
    private readonly parts: { [id: string]: string } = {};

    constructor(vehicleType: string) {
        this.vehicleType = vehicleType;
    }

    GetPartById(id: string) {
        if (this.parts.hasOwnProperty(id)) {
            return this.parts[id];
        } else {
            throw Error("Part does nor exist!")
        }
    }

    AddPartById(id: string, name: string) {
        this.parts[id] = name;
    }

    Show() {
        console.log("-------------------------");
        console.log(`Vehicle Type: ${this.vehicleType} `);
        for (const key in this.parts) {
            if (this.parts.hasOwnProperty(key)) {
                console.log(`Part: ${key} - ${this.parts[key]}`);
            }
        }
    }
}

export default Vehicle;