// // 1. Calculate Rectangle Area

// // Write a simple function that calculates rectangle area. You will be given two integers (whole) numbers, which will represent length and width of the rectangle. Calculate and print the area of the rectangle

// function calculateRectangleArea(length: number, width: number): number {
//     let area: number = length * width;
//     return area;
// }

// console.log(calculateRectangleArea(5, 7));
// console.log(calculateRectangleArea(6, 8));





// // 2. Largest Number

// // Write a function that takes three number arguments as input and finds the largest of them.

// // · Print the following text on the console: `The largest number is {number}.`.

// // · The input comes as three number arguments passed to your function.

// // · The output should be printed to the console.

// // Example

// // Input Output

// // 5, -3, 16 The largest number is 16.

// // -3, -5, -22.5 The largest number is -3.

// function findLargestNumber(num1: number, num2: number, num3: number): void {
//     let largest: number = Math.max(num1, num2, num3);
//     console.log(`The largest number is ${largest}.`);
// }
// findLargestNumber(5, -3, 16);
// findLargestNumber(-3, -5, -22.5);





// // 3.	Sum of Numbers N…M
// // Write a function that takes two integer numbers N and M as an input and prints the sum of all numbers from N to M.
// // •	The input comes as two string elements that need to be parsed as numbers.
// // •	The output should print the sum.
// // Examples
// // Input	Output
// // '1', '5' 	15
// // '-8', '20'	174

// function sumNumbersInRange(n: string, m: string): void {
//     let start: number = parseInt(n);
//     let end: number = parseInt(m);

//     let sum: number = 0;

//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }

//     console.log(sum);
// }
// sumNumbersInRange('1', '5');
// sumNumbersInRange('-8', '20');





// // 4.	Day of Week
// // Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// // •	The input comes as a single-string argument.
// // •	The output should be printed.
// // Examples
// // Input	Output
// // 'Monday'	1
// // 'Friday'	5
// // 'Invalid'	error

// function getDayNumber(day: string): void {
//     const daysOfWeek: { [key: string]: number } = {
//         "Monday": 1,
//         "Tuesday": 2,
//         "Wednesday": 3,
//         "Thursday": 4,
//         "Friday": 5,
//         "Saturday": 6,
//         "Sunday": 7
//     }

//     if (daysOfWeek[day]) {
//         console.log(daysOfWeek[day]);
//     } else {
//         console.log("error");
//     }
// }

// getDayNumber("Monday");
// getDayNumber("Friday");
// getDayNumber("Invalid");





// 5.	Math Operations
// Write a function that takes two numbers and a string as an input.

// The string may be one of the following: '+', '-', '*', '/', '%', '**'.

// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.
// Examples
// Input	Output
// 5, 6, '+'	11
// 3, 5.5, '*'	16.5

// function mathOperation(num1: number, num2: number, operator: string): void {
//     let result: number;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : NaN;
//             break;
//         case '%':
//             result = num1 % num2;
//             break;
//         case '**':
//             result = num1 ** num2;
//             break;
//         default:
//             console.log("Invalid operator");
//             return;
//     }

//     console.log(result);
// }
// mathOperation(5, 6, '+');
// mathOperation(3, 5.5, '*');





// // 6.	Even Position Element
// // Write a function that finds the elements at even positions in an array.
// // The input comes as an array of string elements.
// // The output is printed on the console. Collect all elements in a string, separated by space.
// // Examples
// // Input	Output		Input	Output
// // ['20', '30', '40', '50', '60']	20 40 60		['5', '10']	5

// function evenPositionElements(arr: string[]): void {
//     let result: string = arr.filter((_, index) => index % 2 === 0).join(' ');
//     console.log(result);
// }

// evenPositionElements(['20', '30', '40', '50', '60']);
// evenPositionElements(['5', '10']);





// // 7.	Bigger Half
// // You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. If there is an odd number of elements in the input, always take the bigger half. For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.
// // The input comes as an array of number elements.
// // The output is the return value of the function and should be an array of numbers.
// // Example
// // Input	Output
// // [4, 7, 2, 5]	[5, 7]
// // [3, 19, 14, 7, 2, 19, 6]	[7, 14, 19, 19]


// function biggerHalf(arr: number[]): number[] {
//     arr.sort((a, b) => (a - b));

//     let startIndex = Math.floor(arr.length / 2);
//     return arr.slice(startIndex);
// }

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));





// 8.	Cats
// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input.
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.
// Examples
// Input	Output
// ['Mellow 2', 'Tom 5']	Mellow, age 2 says Meow
// Tom, age 5 says Meow
// ['Candy 1', 'Poppy 3', 'Nyx 2']	Candy, age 1 says Meow
// Poppy, age 3 says Meow
// Nyx, age 2 says Meow

// class Cat {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     meow(): void {
//         console.log(`${this.name}, age ${this.age} says Meow`);
//     }
// }

// function processCats(arr: string[]): void {
//     for (const line of arr) {
//         let [name, age] = line.split(' ');
//         let cat = new Cat(name, Number(age));

//         cat.meow();
//     }
// }

// processCats(['Mellow 2', 'Tom 5']);
// processCats(['Candy 1', 'Poppy 3', 'Nyx 2']);





// // 9.	Employees
// // You're tasked to create a list of employees and their personal numbers.
// // You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).
// // At the end print all the list employees in the following format:
// //  "Name: {employeeName} -- Personal Number: {personalNum}"
// // Examples
// // Input	Output
// // [
// // 'Silas Butler',
// // 'Adnaan Buckley',
// // 'Juan Peterson',
// // 'Brendan Villarreal'
// // ]	Name: Silas Butler -- Personal Number: 12
// // Name: Adnaan Buckley -- Personal Number: 14
// // Name: Juan Peterson -- Personal Number: 13
// // Name: Brendan Villarreal -- Personal Number: 18
// // [
// // 'Samuel Jackson',
// // 'Will Smith',
// // 'Bruce Willis',
// // 'Tom Holland'
// // ]	Name: Samuel Jackson -- Personal Number: 14
// // Name: Will Smith -- Personal Number: 10
// // Name: Bruce Willis -- Personal Number: 12
// // Name: Tom Holland -- Personal Number: 11

// function getEmployeesList(employees: string[]): void {
//     for (const name of employees) {
//         let personalNumber: number = name.length;

//         console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
//     }
// }

// getEmployeesList([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

// getEmployeesList([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
// ]);