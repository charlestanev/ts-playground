// // 1.	Car Info
// // Create a class named Car.
// // The class should have public fields for:
// // •	Brand: text
// // •	Model: text
// // •	Horsepower: integer number
// // Create getters and setters for each class field.
// // Test the Program
// // •	The input consists of line - representing car object.
// // •	You will have car info in the following format "{brand} {model} {horsePower}" separated by single space.
// // •	Print car in the following format: "The car is: {brand} {model} – {horsePower} HP."
// // Examples
// // Input	Output
// // Chevrolet Impala 390	The car is: Chevrolet Impala - 390 HP.
// // Skoda Karoq 150	The car is: This Skoda Karoq - 150 HP.

// class Car {
//     private _brand: string;
//     private _model: string;
//     private _horsePower: number;

//     constructor(brand: string, model: string, horsePower: number) {
//         this._brand = brand;
//         this._model = model;
//         this._horsePower = horsePower;
//     }

//     public get brand(): string {
//         return this._brand;
//     }

//     public set brand(value: string) {
//         this._brand = value;
//     }

//     public get model(): string {
//         return this._model;
//     }

//     public set model(value: string) {
//         this._model = value;
//     }

//     public get horsePower(): number {
//         return this._horsePower;
//     }

//     public set horsePower(value: number) {
//         if (value > 0) {
//             this._horsePower = value;
//         } else {
//             console.error("Horsepower must be a positive number.");
//         }
//     }

//     public getCarInfo(): string {
//         return `The car is: ${this._brand} ${this._model} - ${this._horsePower} HP.`;
//     }
// }

// function createCarFromInput(input: string): Car {
//     const [brand, model, horsePowerString] = input.split(' ');
//     const horsePower = parseInt(horsePowerString);

//     return new Car(brand, model, horsePower);
// }

// const input1 = "Chevrolet Impala 390";
// const car1 = createCarFromInput(input1);
// console.log(car1.getCarInfo());

// const input2 = "Skoda Karoq 150";
// const car2 = createCarFromInput(input2);
// console.log(car2.getCarInfo());





// // 2.	Opinion Poll
// // •	Create a Person class with two fields name and age.
// // •	Write a program that uses line of personal information in the following format "{name} {age}"
// // •	Print the data in the following format: "{name} is {age} years old."
// // Examples
// // Input	Output
// // Peter 12	Peter is 12 years old.
// // Sofia 33	Sofia is 33 years old.

// class Person {
//     private _name: string;
//     private _age: number;

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         this._name = value;
//     }

//     get age(): number {
//         return this._age;
//     }

//     set age(value: number) {
//         value > 0
//             ? this._age = value
//             : console.error("Age must be a positive number.");
//     }

//     getPersonInfo(): string {
//         return `${this._name} is ${this._age} years old.`
//     }
// }

// function createPersonFromInput(input: string): Person {
//     const [name, ageStr] = input.split(' ');
//     const age = parseInt(ageStr);

//     return new Person(name, age);
// }

// const input1 = 'Peter 12';
// const person1 = createPersonFromInput(input1);
// console.log(person1.getPersonInfo());

// const input2 = 'Charles 32';
// const person2 = createPersonFromInput(input2);
// console.log(person2.getPersonInfo());





// // 3.	Bank Account
// // Create class BankAccount.
// // The class should have private fields for:
// // •	Id: int (Starts from 1 and increments for every new account)
// // •	Balance: double
// // •	Interest rate: double (Shared for all accounts. Default value: 0.02)
// // The class should also have public methods for:
// // •	setInterestRate
// // •	getInterest
// // •	deposit
// // Create a test client supporting the following commands:
// // •	Create
// // •	Deposit {Id} {Amount}
// // •	SetInterest {Interest}
// // •	GetInterest {ID} {Years}
// // •	End
// // Examples
// // Input	Output	Comments
// // Create
// // Deposit 1 20
// // GetInterest 1 10
// // End	Account ID1 created
// // Deposited 20 to ID1
// // 4.00
// // Create
// // Create
// // Deposit 1 20
// // Deposit 3 20
// // Deposit 2 10
// // SetInterest 1.5
// // GetInterest 1 1
// // GetInterest 2 1
// // GetInterest 3 1
// // End	Account ID1 created
// // Account ID2 created
// // Deposited 20 to ID1
// // Account does not exist
// // Deposited 10 to ID2
// // 30.00
// // 15.00
// // Account does not exist	Sets the global interest rate to 1.
// // Prints interest for a bank account with id 1 for 1 year period.

// class BankAccount {
//     private static nextId: number = 1;

//     private static globalInterestRate: number = 0.02;

//     private _id: number;
//     private _balance: number;

//     constructor() {
//         this._id = BankAccount.nextId++;
//         this._balance = 0;
//     }

//     public get id(): number {
//         return this._id;
//     }

//     public deposit(amount: number): void {
//         if (amount > 0) {
//             this._balance += amount;
//             console.log(`Deposited ${amount} to ID${this._id}`);
//         } else {
//             console.error("Deposit amount must be positive.");
//         }
//     }

//     public getInterest(years: number): number {
//         return this._balance * BankAccount.globalInterestRate * years;
//     }

//     public static setInterestRate(rate: number): void {
//         if (rate >= 0) {
//             BankAccount.globalInterestRate = rate;
//         } else {
//             console.error("Interest rate must be non-negative.");
//         }
//     }
// }

// const accounts: Map<number, BankAccount> = new Map();

// function processCommand(command: string): void {
//     const parts = command.split(' ');
//     const action = parts[0];

//     switch (action) {
//         case 'Create':
//             const newAccount = new BankAccount();
//             accounts.set(newAccount.id, newAccount);
//             console.log(`Account ID${newAccount.id} created`);
//             break;

//         case "Deposit":
//             const depositId = parseInt(parts[1]);
//             const amount = parseFloat(parts[2]);
//             const account = accounts.get(depositId);
//             if (account) {
//                 account.deposit(amount);
//             } else {
//                 console.log("Account does not exist");
//             }
//             break;

//         case "SetInterest":
//             const newRate = parseFloat(parts[1]);
//             BankAccount.setInterestRate(newRate);
//             break;

//         case "GetInterest":
//             const interestId = parseInt(parts[1]);
//             const years = parseInt(parts[2]);
//             const interestAccount = accounts.get(interestId);
//             if (interestAccount) {
//                 console.log(interestAccount.getInterest(years).toFixed(2));
//             } else {
//                 console.log("Account does not exist");
//             }
//             break;

//         case "End":
//             console.log("Program terminated.");
//             return;

//         default:
//             console.log("Invalid command");
//     }
// }

// const testCommands = [
//     "Create",
//     "Deposit 1 20",
//     "GetInterest 1 10",
//     "End"
// ];

// testCommands.forEach(command => processCommand(command));




// // 4.	Hierarchical Inheritance
// // Create three classes named Animal, Dog, and Cat.
// // •	Animal with a single public method eat() that prints: "eating…"
// // •	Dog with a single public method bark() that prints: "barking…"
// // •	Cat with a single public method meow() that prints: "meowing…"
// // •	Dog and Cat should inherit from Animal.

// class Animal {
//     public eat(): void {
//         console.log('eating ...');
//     }
// }

// class Dog extends Animal {
//     public bark(): void {
//         console.log('barking ...');
//     }
// }

// class Cat extends Animal {
//     public meow(): void {
//         console.log('meowing ...');
//     }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.eat();
// dog.bark();

// cat.eat();
// cat.meow();





// // 5.	Company Roster
// // Define a class Employee that holds the following information: name, salary, position, department, email, and age. The name, salary, position, and department are mandatory, while the rest are optional.
// // Your task is to write a program that takes N lines of information about employees from the console and calculates the department with the highest average salary, and prints for each employee in that department his name, salary, email, and age - sorted by salary in descending order. If an employee doesn't have an email – in place of that field, you should print "n/a" instead, if he doesn't have an age – print "-1" instead. Print in the following format:
// // "Highest Average Salary: {department}
// // {name1} {salary1} {email1} {age1}
// // {name2} {salary2} {email2} {age2}
// // …
// // {namen} {salaryn} {emailn} {agen}"
// // The salary should be printed to two decimal places after the separator.
// // Hint: You can define a Department class that holds a list of employees.
// // Examples
// // Input	Output
// // 4
// // Peter 120.00 Dev Development peter@abv.bg 28
// // Tina 333.33 Manager Marketing 33
// // Sam 840.20 ProjectLeader Development sam@sam.com
// // George 0.20 Freeloader Nowhere 18	Highest Average Salary: Development
// // Sam 840.20 sam@sam.com -1
// // Peter 120.00 peter@abv.bg 28
// // 6
// // Silver 496.37 Temp Coding silver@yahoo.com
// // Sam 610.13 Manager Sales
// // John 609.99 Manager Sales john@abv.bg 44
// // Venci 0.02 Director BeerDrinking beer@beer.br 23
// // Andre 700.00 Director Coding
// // Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey	Highest Average Salary: Sales
// // Sam 610.13 n/a -1
// // John 609.99 john@abv.bg 44

// class Employee {
//     private _name: string;
//     private _salary: number;
//     private _position: string;
//     private _department: string;
//     private _email: string;
//     private _age: number;

//     constructor(name: string, salary: number, position: string, department: string, email: string = "n/a", age: number = -1) {
//         this._name = name;
//         this._salary = salary;
//         this._position = position;
//         this._department = department;
//         this._email = email;
//         this._age = age;
//     }

//     public get salary(): number {
//         return this._salary;
//     }

//     public getEmployeeInfo(): string {
//         return `${this._name} ${this._salary.toFixed(2)} ${this._email} ${this._age}`;
//     }
// }

// class Department {
//     private _name: string;
//     private _employees: Employee[] = [];

//     constructor(name: string) {
//         this._name = name;
//     }

//     public addEmployee(employee: Employee): void {
//         this._employees.push(employee);
//     }

//     public getAverageSalary(): number {
//         const totalSalary = this._employees.reduce((sum, emp) => sum + emp.salary, 0);
//         return this._employees.length > 0
//             ? totalSalary / this._employees.length
//             : 0;
//     }

//     public get name(): string {
//         return this._name
//     }

//     public getSortedEmployees(): Employee[] {
//         return this._employees.sort((a, b) => (b.salary - a.salary));
//     }
// }

// const departments: Map<string, Department> = new Map();

// function processEmployeeData(employeeData: string[]): void {
//     for (const data of employeeData) {
//         const parts = data.split(' ');
//         const [name, salaryString, position, department, email, ageString] = parts;
//         const salary = parseInt(salaryString);
//         const age = ageString ? parseInt(ageString) : -1;

//         if (!departments.has(department)) {
//             departments.set(department, new Department(department))
//         }

//         const newEmployee = new Employee(name, salary, position, department, email ?? 'n/a', age);
//         departments.get(department)!.addEmployee(newEmployee);
//     }
// }

// function findHighestPaidDepartment(): void {
//     let highestPaidDepartment: Department | null = null;

//     for (const department of departments.values()) {
//         if (!highestPaidDepartment || department.getAverageSalary() > highestPaidDepartment.getAverageSalary()) {
//             highestPaidDepartment = department;
//         }
//     }

//     if (highestPaidDepartment) {
//         console.log(`Highest Average Salary: ${highestPaidDepartment.name}`);
//         for (const employee of highestPaidDepartment.getSortedEmployees()) {
//             console.log(employee.getEmployeeInfo());
//         }
//     }
// }

// const inputData = [
//     "Peter 120.00 Dev Development peter@abv.bg 28",
//     "Tina 333.33 Manager Marketing 33",
//     "Sam 840.20 ProjectLeader Development sam@sam.com",
//     "George 0.20 Freeloader Nowhere 18"
// ];

// processEmployeeData(inputData);
// findHighestPaidDepartment();