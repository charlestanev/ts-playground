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