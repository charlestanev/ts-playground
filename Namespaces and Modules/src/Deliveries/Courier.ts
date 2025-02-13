/// <reference path="FoodAndBeverages.ts" />

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: { customerName: string; visited: boolean }[];

    constructor(placesToVisit: { customerName: string; visited: boolean }[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited?: boolean): string {
        if (this.placesToVisit.some(client => client.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }

        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }

    visitCustomer(customerName: string): void {
        const customer = this.placesToVisit.find(client => client.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        }
        customer.visited = true;
    }

    showCustomers(): string {
        return this.placesToVisit.map(client => `${client.customerName} -> ${client.visited}`).join('\n');
    }
}

let courier = new Courier([{ customerName: 'DHL', visited: false }]);

console.log(courier.newCustomer('Speedy'));
console.log(courier.newCustomer('MTM'));
console.log(courier.newCustomer('TipTop'));

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());