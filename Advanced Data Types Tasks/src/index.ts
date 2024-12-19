// // 1.	Calorie Object
// // Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.
// // The input comes as an array of string elements.
// // The output should be printed on the console.
// // Examples
// // Input	Output
// // ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']	{ Yoghurt: 48, Rise: 138, Apple: 52 }
// // ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']	{ Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

// interface FoodCalories {
//     [foodName: string]: number;
// }

// function createCalorieObject(input: string[]): FoodCalories {
//     const result: FoodCalories = {};

//     for (let i = 0; i < input.length; i += 2) {
//         const food = input[i];
//         const calories = Number(input[i + 1]);
//         result[food] = calories;
//     }
//     return result;
// }

// const input1 = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];
// const input2 = ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'];

// console.log(createCalorieObject(input1));
// console.log(createCalorieObject(input2));





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

// interface PersonInfo {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function createPersonInfo(firstName: string, lastName: string, age: string): PersonInfo {
//     return {
//         firstName,
//         lastName,
//         age: Number(age)
//     };
// }
// const person1 = createPersonInfo("Peter", "Pan", "20");
// const person2 = createPersonInfo("George", "Smith", "18");

// console.log(person1);
// console.log(person2);



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
//     items: string[];
// }

// function registerHeroes(input: string[]): void {
//     const heroes: Hero[] = [];

//     input.forEach(x => {
//         const [name, level, items] = x.split(' / ');

//         heroes.push({
//             name,
//             level: Number(level),
//             items: items ? items.split(', ') : []
//         })
//     })

//     heroes.sort((a, b) => a.level - b.level);

//     heroes.forEach(hero => {
//         console.log(`Hero: ${hero.name}`);
//         console.log(`level => ${hero.level}`);
//         console.log(`items => ${hero.items.join(', ')}`);
//     })
// }

// const input1 = [
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ];

// const input2 = [
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ];

// registerHeroes(input1);
// registerHeroes(input2);





// 4.	Towns
// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
// Examples
// Input
// ['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// Output
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }

// Input
// ['Plovdiv | 136.45 | 812.575']
// Output
// { town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }

interface Town {
    town: string;
    latitude: string;
    longitude: string;
}

function processTowns(input: string[]): void {
    input.forEach(row => {
        const [town, latitude, longitude] = row.split(' | ');

        const townObject: Town = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(townObject);

    })
}

const input1 = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];
const input2 = ['Plovdiv | 136.45 | 812.575'];

console.log("Output for input1:");
processTowns(input1);

console.log("---------------------------------------------");

console.log("Output for input2:");
processTowns(input2);