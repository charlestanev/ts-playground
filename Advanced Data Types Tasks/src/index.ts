// // 1.	Calorie Object
// // Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.
// // The input comes as an array of string elements.
// // The output should be printed on the console.
// // Examples
// // Input	Output
// // ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']	{ Yoghurt: 48, Rise: 138, Apple: 52 }
// // ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']	{ Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

// function createCalorieObject(input: string[]): Record<string, number> {
//     let calorieObject: Record<string, number> = {};

//     for (let i = 0; i < input.length; i += 2) {
//         let foodName = input[i];
//         let calories = Number(input[i + 1]);
//         calorieObject[foodName] = calories;
//     }

//     return calorieObject
// }

// console.log(
//     createCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
// );
// console.log(
//     createCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
// );





// // 2.	Person Info
// // Write a function that receives 3 parameters, sets them to an object, and returns that object.
// // The input comes as 3 separate strings in the following order: firstName, lastName, age.
// // Examples
// // Input	Object Properties
// // "Peter",
// // "Pan",
// // "20"	firstName: Peter
// // lastName: Pan
// // age: 20
// // "George",
// // "Smith",
// // "18"	firstName: George
// // lastName: Smith
// // age: 18

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function createPerson(firstName: string, lastName: string, age: string): Person {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: Number(age)
//     }
// }

// const person1 = createPerson("Peter", "Pan", "20");
// const person2 = createPerson("George", "Smith", "18");

// console.log(`firstName: ${person1.firstName}`);
// console.log(`lastName: ${person1.lastName}`);
// console.log(`firstName: ${person1.age}`);
// console.log('                                ');
// console.log(`firstName: ${person2.firstName}`);
// console.log(`lastName: ${person2.lastName}`);
// console.log(`age: ${person2.age}`)





// // 3.	Inventory
// // Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
// // The input comes as an array of strings. Each element holds data for a hero, in the following format:
// // "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
// // You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// // The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// // Hero: {heroName}
// // level => {heroLevel}
// // Items => {item1}, {item2}, {item3}
// // Examples
// // Input	Output
// // [
// // 'Isacc / 25 / Apple, GravityGun',
// // 'Derek / 12 / BarrelVest, DestructionSword',
// // 'Hes / 1 / Desolator, Sentinel, Antara'
// // ]	Hero: Hes
// // level => 1
// // items => Desolator, Sentinel, Antara
// // Hero: Derek
// // level => 12
// // items => BarrelVest, DestructionSword
// // Hero: Isacc
// // level => 25
// // items => Apple, GravityGun
// // [
// // 'Batman / 2 / Banana, Gun',
// // 'Superman / 18 / Sword',
// // 'Poppy / 28 / Sentinel, Antara'
// // ]	Hero: Batman
// // level => 2
// // items => Banana, Gun
// // Hero: Superman
// // level => 18
// // items => Sword
// // Hero: Poppy
// // level => 28
// // items => Sentinel, Antara

// interface Hero {
//     name: string;
//     level: number;
//     items: string[]
// }

// function createHeroRegistry(input: string[]): Hero[] {
//     return input.map(entry => {
//         const [name, level, items] = entry.split(' / ');
//         return {
//             name: name,
//             level: Number(level),
//             items: items ? items.split(', ') : []
//         }
//     }).sort((a, b) => a.level - b.level);
// }

// function printHeroes(heroes: Hero[]): void {
//     heroes.forEach(hero => {
//         console.log(`Hero: ${hero.name}`);
//         console.log(`level => ${hero.level}`);
//         console.log(`items => ${hero.items.join(", ")}`);
//     })
// }

// const heroesData = [
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ];

// const heroesRegistry = createHeroRegistry(heroesData);
// printHeroes(heroesRegistry);