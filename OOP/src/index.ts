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