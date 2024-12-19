// // Lab: OOP
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

// interface ICar {
//     brand: string;
//     model: string;
//     horsePower: number;
// }

// class Car implements ICar {
//     private _brand: string;
//     private _model: string;
//     private _horsepower: number;

//     constructor(brand: string, model: string, horsepower: number) {
//         this._brand = brand;
//         this._model = model;
//         this._horsepower = horsepower;
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
//         return this._horsepower;
//     }

//     public set horsepowers(value: number) {
//         this._horsepower = value;
//     }

//     public getCarInfo(): string {
//         return `The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`
//     }
// }

// function processCarInput(input: string): void {
//     const [brand, model, horsepowerStr] = input.split(' ');
//     const horsepower = parseInt(horsepowerStr, 10);

//     if (!brand || !model || isNaN(horsepower)) {
//         throw new Error("Невалиден формат на входа. Очакван формат: '{марка} {модел} {конски сили}'.");
//     }

//     const car = new Car(brand, model, horsepower);
//     console.log(car.getCarInfo());
// }

// const inputs = ["Chevrolet Impala 390", "Skoda Karoq 150"];
// inputs.forEach((input) => {
//     try {
//         processCarInput(input);
//     } catch (error) {
//         console.error(error.message);
//     }
// });



// 2.	Opinion Poll
// •	Create a Person class with two fields name and age.
// •	Write a program that uses line of personal information in the following format "{name} {age}"
// •	Print the data in the following format: "{name} is {age} years old."
// Examples
// Input	Output
// Peter 12	Peter is 12 years old.
// Sofia 33	Sofia is 33 years old.
// interface IPoll {
//     name: string,
//     age: number
// }

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

function processOpinionPoll(input: string[]): void {
    input.forEach(data => {
        const [name, ageStr] = data.split(' ');

        const age = Number(ageStr);

        const person = new Person(name, age);

        console.log(person.getInfo());
    })
}

const inputs = ['Peter 12', 'Sofia 33'];

processOpinionPoll(inputs)
