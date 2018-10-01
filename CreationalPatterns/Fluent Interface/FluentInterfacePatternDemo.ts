import IPatternDemo from "../../pattern";
import Customer from "./Customer";

class FluentInterfacePatternDemo implements IPatternDemo {
    show(): void {
        const customer = new Customer()
        .FirstName("Gosho")
        .LastName("Todorov")
        .Gender("Male")
        .Address("Some Address");
        
        customer.Show();
    }
}

export default FluentInterfacePatternDemo;