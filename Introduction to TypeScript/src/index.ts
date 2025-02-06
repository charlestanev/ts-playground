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





// 4.	Day of Week
// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// •	The input comes as a single-string argument.
// •	The output should be printed.
// Examples
// Input	Output
// 'Monday'	1
// 'Friday'	5
// 'Invalid'	error

function getDayNumber(day: string): void {
    const daysOfWeek: { [key: string]: number } = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }

    if (daysOfWeek[day]) {
        console.log(daysOfWeek[day]);
    } else {
        console.log("error");
    }
}

getDayNumber("Monday");
getDayNumber("Friday");
getDayNumber("Invalid");