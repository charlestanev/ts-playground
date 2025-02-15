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