// // Задача 1
// // Създайте декоратор, който при създаването на обект от даден
// // клас извежда съобщение в конзолата.

// function logClassCreation(constructor: Function) {
//     console.log(`Класът ${constructor.name} беше създаден.`);
// }

// @logClassCreation

// class User {
//     constructor(public name: string) { }
// }
// const user1 = new User('Ivan')






// // Задача 2 Задача 2: Създайте класов декоратор,
// // който добавя ново статично свойство към класа.

// function addStaticProperty(constructor: Function) {
//     (constructor as any).category = 'General';
//     console.log(`Добавено е статично свойство 'category' със стойност 'General'.`);
// }

// @addStaticProperty

// class Product {
//     constructor(public name: string) {

//     }
// }

// console.log((Product as any).category);





// // 🟠 Задача 3: Създайте класов декоратор, който брои колко обекта от даден клас са създадени.
// interface Constructable {
//     new(...args: any[]): any;
// }

// function countInstances(constructor: Constructable) {

//     (constructor as any).instanceCount = 0;

//     const originalConstructor = constructor;

//     const newConstructor: Constructable = class extends originalConstructor {
//         constructor(...args: any[]) {
//             super(...args);
//             (constructor as any).instanceCount++;
//         }
//     };

//     return newConstructor;
// }

// @countInstances
// class Order {
//     constructor(public id: number) { }
// }

// const order1 = new Order(1);
// const order2 = new Order(2);
// console.log((Order as any).instanceCount);





// // Задача 4: Създайте класов декоратор, който добавя метод greet() с фиксирано съобщение.
// function addGreetMethod(constructor: Function) {
//     (constructor as any).prototype.greet = function () {
//         console.log("Здравейте! Това е генерирано съобщение от декоратор.");
//     }
// }

// @addGreetMethod
// class Customer {
//     constructor(public name: string) { }
// }

// const customer = new Customer('Петър');
// (customer as any).greet();





// // Задача 5:
function myClassDecorator(constructor: Function) {
    console.log('Декораторът на класа е изпълнен');
    constructor.prototype.newProperty = 'Ново свойство';
}

@myClassDecorator
class MyClass {
    constructor() {
        console.log('Конструкторът на класа е изпълнен');
    }
}

const instance = new MyClass();
console.log((instance as any).newProperty);

























// Задача 10
// Условие:
// Създайте декоратор, който при извикването на метод извежда съобщения
// "Започна изпълнението на метод X" и "Завърши изпълнението на метод X".

// function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//         console.log(`Започва изпълнението на метода "${methodName}"`);
//         const result = originalMethod.apply(this, args);
//         console.log(`Завърши методът: ${methodName}`);
//         return result;
//     }

//     return descriptor;
// }

// class Calculator {

//     @logMethod

//     add(a: number, b: number): number {
//         return a + b
//     }
// }

// const calc = new Calculator();
// calc.add(5, 3); 