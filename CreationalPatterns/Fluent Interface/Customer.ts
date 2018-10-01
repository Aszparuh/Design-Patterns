import CustomerContext from "./CustomerContext";

class Customer {
    private readonly context: CustomerContext = new CustomerContext();

    FirstName(name: string): Customer {
        this.context.firstName = name;
        return this;
    }

    LastName(name: string): Customer {
        this.context.lastName = name;
        return this;
    }

    Gender(gender: string): Customer {
        this.context.gender = gender;
        return this;
    }

    Address(address: string): Customer {
        this.context.address = address;
        return this;
    }

    Show(): void {
        console.log(`First Name: ${this.context.firstName}`);
        console.log(`Last Name: ${this.context.lastName}`);
        console.log(`Gender Name: ${this.context.gender}`);
        console.log(`Address Name: ${this.context.address}`);
    }
}

export default Customer;