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