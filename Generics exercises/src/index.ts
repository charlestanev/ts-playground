// // 0. Кутия за съхранение на предмети
// // Трябва да създадем клас StorageBox,
// // който може да съхранява един елемент от произволен тип.
// // Трябва да добавим методи за запазване и извличане на този елемент.

// class Storagebox<T> {
//     private item: T | null = null;

//     setItem(item: T): void {
//         this.item = item;
//     }
//     getItem(): T | null {
//         return this.item
//     }
// }

// const numberBox = new Storagebox<number>();
// numberBox.setItem(42);
// console.log(numberBox.getItem());

// const stringBox = new Storagebox<string>();
// stringBox.setItem('string for exapmle');
// console.log(stringBox.getItem());

// const objectBox = new Storagebox();
// objectBox.setItem({ name: 'ivan', age: 1000000 });
// console.log(objectBox.getItem());











// // 1.	Generic Box of String
// // Create a generic class Box that takes one property from the constructor. This property must be initialized with generic type. Create a toString() method that returns a message in the following format: "{data} is of type {type}".
// // Examples
// // Input	Output
// // let box1 = new Box(['test']);
// // let box2 = new Box(20);
// // let box3 = new Box('Hello');

// // console.log(box1.toString());
// // console.log(box2.toString());
// // console.log(box3.toString());	test is of type object
// // 20 is of type number
// // Hello is of type string

// class Box<T> {
//     private _value: T;

//     constructor(value: T) {
//         this._value = value;
//     }

//     public toString(): string {
//         return `${this._value} is of type ${typeof this._value}`;
//     }
// }

// let box1 = new Box(['test']);
// let box2 = new Box(20);
// let box3 = new Box('Hello');

// console.log(box1.toString());
// console.log(box2.toString());
// console.log(box3.toString());





// // 2.	Generic Compare Elements
// // Create a generic class that has as a property an array of generic type. Create a compare(comparator) method that takes an argument of any type. Iterate through the array and compare each element of the array to the comparator and return how many times the comparator is matched.
// // Examples
// // Input	Output
// // let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

// // console.log(c.compare('b'));
// // 	2
// // let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

// // console.log(c.compare(1));	3

// class CompareElements<T> {
//     private _elements: T[];

//     constructor(elements: T[]) {
//         this._elements = elements;
//     }

//     public compare(comparator: T): number {
//         return this._elements.filter(element => element === comparator).length;
//     }
// }

// let c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(c1.compare('b'));

// let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
// console.log(c2.compare(1));





// // 3.	Car Dealership
// // Create two generic interfaces:
// // •	Dealership that takes one generic type parameter: dealershipName and another property - soldCars (number)
// // •	Actions that takes one generic type parameter and defines a sellCar(dealerID , model) method, where both parameters are of the generic type passed to the interface

// // Create a class CarDealership that implements both Dealership and Actions and has one property of its own:
// // •	Public property modelsSold which is initially set to empty object
// // Note: The dealershipName is taken through the constructor and the soldCars is initially set to 0.
// // Make the following two methods:
// // •	sellCar(dealerID , model)  – add the dealerID as a key and the model as value in the modelsSold object and increase the soldCars by 1;
// // •	showDetails() – return a message in the following format:

// // "{Dealership}:
// // {dealerID} sold {model}
// // ..."
// // Examples
// // Input	Output
// // let dealership = new CarDealer('SilverStar');

// // dealership.sellCar('BG01', 'C Class');
// // dealership.sellCar('BG02', 'S Class');
// // dealership.sellCar('BG03', 'ML Class');
// // dealership.sellCar('BG04', 'CLK Class');
// // console.log(dealership.showDetails());	SilverStar:
// // BG01 sold C Class
// // BG02 sold S Class
// // BG03 sold ML Class
// // BG04 sold CLK Class

// interface Dealership<T> {
//     dealershipName: T;
//     soldCars: number;
// }

// interface Actions<T> {
//     sellCar(dealerID: T, model: string): void;
// }

// class CarDealership<T extends string | number> implements Dealership<T>, Actions<T> {
//     dealershipName: T;
//     soldCars: number = 0;
//     public modelsSold: Map<T, string> = new Map<T, string>();

//     constructor(dealershipName: T) {
//         this.dealershipName = dealershipName;
//     }

//     public sellCar(dealerID: T, model: string): void {
//         this.modelsSold.set(dealerID, model);
//         this.soldCars++;
//     }

//     public showDetails(): string {
//         let details = `${this.dealershipName}:\n`;

//         for (const [dealerID, model] of this.modelsSold) {
//             details += `${dealerID} sold ${model}\n`;
//         }

//         return details.trim();
//     }
// }

// let dealership = new CarDealership<string>('SilverStar');

// dealership.sellCar('BG01', 'C Class');
// dealership.sellCar('BG02', 'S Class');
// dealership.sellCar('BG03', 'ML Class');
// dealership.sellCar('BG04', 'CLK Class');

// console.log(dealership.showDetails());





// 4.	Bank Transactions
// Create an abstract generic class CreateAccount that takes two generic type parameters: bankName and bankID.
// Create a class PersonalAccount that extends CreateAccount and has three properties of its own:
// •	Readonly property ownerName (string)
// •	Public property money (number) which is initially set to 0
// •	Public property recentTransactions which is initially set to empty object
// Only the ownerName is taken through the constructor.

// Make the following three methods:
// •	deposit(amount) – simply add the amount to the money you currently have
// •	expense(amount, expenseType) – check if you have enough money (>= 0) to make the expense. If so put the expenseType as key and the amount as a value to the recentTransactions object. Furthermore, if have made the same expense more than once simply add the new amount to the existing one. However, if you don’t have enough money for the expense throw a new error: “You cant make {expenseType} transaction”
// •	showDetails() – Calculate the total amount of money spent on expenses and return a message in the following format:

// "Bank name: {bankName}
// Bank ID: {bankID}
// Owner name: {ownerName}
// Money: {money}
// Money spent: {totalMoneySpentOnExpenses}"


