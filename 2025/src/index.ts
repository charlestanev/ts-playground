// let sum = function (num: number): number {
//     return num * 4
// }

// console.log(sum(4));

// let solve = (num: number): number => {
//     return (num * 2)
// }
// solve(3)

// let solve = function (num: number): string {
//     return (num >= 5.49 ? 'da' : 'ne')
// }

// console.log(solve(5.48));
// console.log(solve(5.50));
// console.log(solve(5.80));


// let one = function (n: number): void {
//     while (n >= 1) {
//         console.log(n);
//         n--
//     }
// }

// one(10)

// function wtf(name: string, age: number, grade: number): void {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }

// wtf('John', 15, 5.54678)

// function monthPrinter(month: number): string {
//     if (month > 0 && month < 13) {
//         switch (month) {
//             case 1:
//                 return ('January')
//             case 2:
//                 return ('February')
//             case 3:
//                 return ('March')

//             default:
//                 return ('Error!')
//         }
//     }
// }
// console.log(monthPrinter(2));
// console.log(monthPrinter(2000));

// function theatrePromotions(day: string, age: number): string {
//     if (age < 0 || age > 122) {
//         return "Error !"
//     }

//     let price: string = '';

//     switch (day) {
//         case 'Weekday':
//             if (age <= 18) {
//                 price = '12$'
//             } else if (age <= 64) {
//                 price = '18$'
//             } else {
//                 price = '12$'
//             }

//             break;

//         case 'Weekend':
//             if (age <= 64) {
//                 price = '15$'
//             } else if (age <= 64) {
//                 price = '20$'
//             } else {
//                 price = '15$'
//             }

//         case 'Holiday':
//             if (age <= 64) {
//                 price = '5$'
//             } else if (age <= 64) {
//                 price = '12$'
//             } else {
//                 price = '10$'
//             }

//             break;

//         default:
//             return 'Error !';
//     }
//     return price;
// }

// console.log(theatrePromotions('Weekday', 42));
// console.log(theatrePromotions('Holiday', -12));
// console.log(theatrePromotions('Holiday', 15));

// function oddNumbers(num: number): number {
//     let currentOdd: number = 1;
//     let sum: number = 0;

//     for (let i = 0; i < num; i++) {
//         console.log(currentOdd);

//         sum += currentOdd;
//         currentOdd += 2
//     }
//     return sum
// }

// console.log(oddNumbers(5));

// function printSum(a: number, b: number): void {
//     let sum: number = 0;

//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     console.log(sum);

// }
// printSum(5, 10)
// printSum(2, 26)
// printSum(50, 60)
// printSum(1, 100)

// function triangle(n: number): void {
//     for (let i = 0; i < n; i++) {
//         let line: string = ''
//         for (let a = 0; a < i; a++) {
//             line += ` ${a}`
//         }
//         console.log(line);
//     }
// }

// triangle(10)

// function multiply(num: number): void {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }

// multiply(7)

// function multiply(num: number): void {
//     let line: string = '';

//     for (let i = 1; i <= num; i++) {
//         for (let a = 1; a <= num; a++) {
//             line = `${i} x ${a} = ${i * a}`
//             console.log(line);
//         }
//     }
// }

// multiply(3)


// function multiply(num: number): void {
//     let row: number = 1;

//     while (row <= num) {
//         let col: number = 1;

//         while (col <= num) {
//             const result = row * col;
//             console.log(`${row} x ${col} = ${result}`);
//             col++;
//         }
//         row++
//     }
// }

// multiply(10)

// function sumDigitsReduce(num: number): void {


//     // Разделяме низа на масив от символи (напр. '245' → ['2', '4', '5'])

//     // Преобразуваме всеки символ към число (напр. ['2','4','5'] → [2, 4, 5])

//     // Използваме reduce, за да обиколим всички числа и ги съберем:
//     // acc (accumulator) e текущата натрупана сума
//     // digit е текущата стойност от масива
//     // 0 е началната стойност на акумулатора


//     console.log(
//         num
//             .toString()
//             .split('')
//             // .reverse()
//             .map(Number)
//             .sort((a, b) => (a - b))
//             .reduce((acc, digit) => acc + digit, 0)

//     )
// }

// // Примерни тестове:
// sumDigitsReduce(245678)
// sumDigitsReduce(97561) // ➜ 28
// sumDigitsReduce(543)   // ➜ 12


// function solve(a: string, b: string, c: string): void {
//     let str: string[] = [];
//     str.push(a, b, c)
//     let newStr = str.join('')
//     console.log(typeof newStr);
// }

// solve('a', 'b', 'c')


// function solve(a: string, b: string, c: string): void {
//     const result = a + b + c;
//     console.log(result);
// }

// solve('a', 'b', 'c')


// function solve(a: string, b: string, c: string): void {
//     const result = a + b + c;
//     let newresult = result.split('').reverse().join(' ');
//     console.log(newresult);
// }

// solve('A', 'B', 'C');


// function solve(a: string, b: string, c: string): void {
//     const result = [c, b, a].join(' ')
//     console.log(result);
// }
// function solve(a: string, b: string, c: string): void {
//     const result = [c, b, a].join(' ')
//     console.log(result);
// }

// solve('A', 'B', 'C');



// function solve(char: string): void {
//     char === char.toUpperCase()
//         ? console.log('upper-case')
//         : console.log('lower-case')
// }

// solve('b');


// function calculator(num1: number, operator: string, num2: number): void {
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
//             result = num1 / num2;
//             break;
//         default:
//             console.log('Invalid operator');
//             return;
//     }

//     console.log(result.toFixed(2));
// }

// // Примерни тестове:
// calculator(5, '+', 10);     // ➜ 15.00
// calculator(25.5, '-', 3);   // ➜ 22.50
// calculator(6, '*', 4);      // ➜ 24.00
// calculator(10, '/', 3);     // ➜ 3.33


// function biggest(a: number, b: number, c: number): void {
//     let str = [a, b, c];
//     let news = str.sort((a, b) => (b - a))
//     console.log(news[0]);
// }

// biggest(-2, 7, 3);


// function biggest(a: number, b: number, c: number): void {

//     console.log(Math.max(a, b, c));
// }

// biggest(-2, 7, 3);       // ➜ 7
// biggest(130, 5, 99);     // ➜ 130
// biggest(43, 43.2, 43.1);


// function biggest(num: number[]): void {
//     console.log(num[0] + num[num.length - 1]);
// }

// biggest([11, 58, 69]);


// function biggest(a: number, num: number[]): void {
//     let newn = num
//         .splice(0, a)
//         .reverse()
//         .join(' ');
// }

// biggest(2, [66, 43, 75, 89, 47]);
// biggest(3, [10, 20, 30, 40, 50]);
// biggest(4, [-1, 20, 99, 5]);



// function biggest(str: string[]): number {
//     let newStr = str
//         .map(Number)
//         .filter(x => x % 2 === 0)
//         .reduce((acc, cur) => acc + cur)
//     return (newStr)
// }
// console.log(biggest(['1', '2', '3', '4', '5', '6']));
// console.log(biggest(['2', '4', '6', '8', '10']));



// function biggest(nums: number[]): void {

//     let notOdd = nums
//         .filter(x => x % 2 === 0)
//         .reduce((acc, cur) => acc + cur, 0)

//     let odd = nums
//         .filter(x => x % 2 != 0)
//         .reduce((acc, cur) => acc + cur, 0)

//     console.log(notOdd - odd);
// }

// biggest([1, 2, 3, 4, 5, 6])
// biggest([3, 5, 7, 9])
// biggest([2, 4, 6, 8, 10])




// function equalArrays(first: string[], second: string[]): void {
//     let sum: number = 0;
//     let diff: number = -1;

//     first.map((x, i) =>
//         x === second[i]
//             ? sum += Number(x)
//             : diff = i
//     )

//     diff === -1
//         ? console.log('Arrays are identical. Sum: ' + sum)
//         : console.log(`Arrays are not identical. Found difference at ${diff} index`)
// }

// equalArrays(['10','20','30'], ['10','20','30']);
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
// equalArrays(['1'], ['10']);

// function solve(arr: number[]): void {

//     let newArr = [];

//     arr.map((x, i) => {
//         x % 2 === 0 ? newArr.push(x += i) : newArr.push(x -= i)
//     })

//     let sumOriginal = arr.reduce((prev, curr) => prev + curr)
//     let newArrSum = newArr.reduce((x, i) => x + i)
//     console.log(newArr);
//     console.log(sumOriginal);
//     console.log(newArrSum);
// }

// solve([5, 15, 23, 56, 35])
// solve([-5, 11, 3, 0, 2])



// function solve(
//     arr1: (string | number)[],
//     arr2: (string | number)[]
// ): void {
//     arr1.forEach(x => {
//         if (arr2.includes(x)) {
//             console.log(x);
//         }
//     })
// }


// solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']
// )

// solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']
// )


// function solve(
//     arr1: string[],
//     arr2: string[]
// ): void {
//     let newArr = [];
//     arr1.map((x, i) => {
//         i % 2 === 0
//             ? (newArr.push(Number(x) + Number(arr2[i])))
//             : (newArr.push(x + arr2[i]))
//     })
//     console.log(newArr.join('-'));
// }


// solve(['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11']
// )

// solve(['13', '12312', '5', '77', '4'],
//     ['22', '333', '5', '122', '44']
// )


// function solve(
//     arr1: number[],
//     num: number
// ): void {
//     let newArr = [];

//     // for (let index = 0; index < num; index++) {
//     //     let el = arr1.shift()
//     //     arr1.push(el)
//     // }

//     Array.from({ length: num }, () => {
//         arr1.push(arr1.shift())
//     })

//     console.log(arr1.join(' '));

// }


// solve([51, 47, 32, 61, 21], 2)

// solve([32, 21, 61, 1], 4)

// solve([2, 4, 15, 31], 5)



// function solve(
//     arr: number[],
// ): void {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let comparable = arr[i];

//         let elementsToCompare = arr.slice(i + 1);

//         let maxToRight = Math.max(...elementsToCompare);

//         comparable > maxToRight && (newArr.push(comparable))
//     }
//     console.log(newArr.join(' '));
// }


// solve([1, 4, 3, 2])

// solve([14, 24, 3, 19, 15, 17])

// solve([41, 41, 34, 20])

// solve([27, 19, 42, 2, 13, 45, 48])



// function RepeatString(str: string, num: number): string {
//     let newStr: string = '';
//     for (let i = 0; i < num; i++) {
//         newStr += str
//     }
//     return newStr
// }

// console.log(RepeatString('abc', 3));
// console.log(RepeatString('String', 2));


// function mathPower(a: number, b: number): number {
//     return (Math.pow(a, b))
// }

// console.log(mathPower(2, 8));
// console.log(mathPower(3, 4));




// function orders(a: string, b: number): void {
//     switch (a) {
//         case 'water':

//             let num = (b * 1).toFixed(2)

//             console.log(num);


//             break;

//         default:
//             break;
//     }
// }

// orders('water', 5);


// function SimpleCalculator(num1: number, num2: number, command: string): number {
//     switch (command) {
//         case ('multiply'):
//             return num1 * num2
//             break;
//         case ('divide'):
//             return num1 / num2
//             break;
//         case ('add'):
//             return num1 + num2
//             break;
//         case ('subtract'):
//             return num1 - num2
//             break;
//         default:
//             return
//     }
// }

// console.log(SimpleCalculator(5, 5, 'multiply'));
// console.log(SimpleCalculator(40, 8, 'divide'));
// console.log(SimpleCalculator(12, 19, 'add'));
// console.log(SimpleCalculator(50, 13, 'subtract'));

// Exercise: Functions
// function SmallestofThreeNumbers(a: number, b: number, c: number): number {
//     return Math.min(a, b, c)
// }

// console.log(SmallestofThreeNumbers(2, 5, 3));
// console.log(SmallestofThreeNumbers(600, 342, 123));
// console.log(SmallestofThreeNumbers(25, 21, 4));

// function AddandSubtract(a: number, b: number, c: number): number {
//     return (a + b) - c
// }

// console.log(AddandSubtract(23, 6, 10));
// console.log(AddandSubtract(1, 17, 30));
// console.log(AddandSubtract(42, 58, 100));



// function charactersInRange(a: string, b: string): void {
//     const code1 = a.charCodeAt(0)
//     const code2 = b.charCodeAt(0)

//     const start = Math.min(code1, code2) + 1;
//     const end = Math.max(code1, code2)

//     let result: string[] = [];

//     for (let i = start; i < end; i++) {
//         result.push(String.fromCharCode(i));
//     }

//     console.log(result.join(' '));
// }

// charactersInRange('a', 'd');
// // ➜ b c

// charactersInRange('#', ':');
// // ➜ $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9

// charactersInRange('C', '#');
// // ➜ $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B



// function OddAndEvenSum(num: number): void {
//     let arrayNums = num.toString().split('');

//     let oddNums: number[] = [];
//     let evenNums: number[] = [];

//     arrayNums.map(x => {
//         Number(x) % 2 === 0
//             ? evenNums.push(Number(x))
//             : oddNums.push(Number(x))
//     })

//     let newOdds = oddNums.reduce((a, t) => a + t, 0)
//     let newEven = evenNums.reduce((a, t) => a + t, 0)

//     console.log(`Odd sum = ${newOdds}, Even sum = ${newEven}`);

// }

// OddAndEvenSum(1000435);
// OddAndEvenSum(3495892137259234);







// function palindromeIntegers(arr: number[]): boolean[] {
//     let strArr = arr.map(x => x.toString())
//     let result: boolean[] = [];

//     strArr.map(x => {
//         let reversed = x.split('').reverse().join('');
//         x === reversed
//             ? result.push(true)
//             : result.push(false)
//     })

//     return result;
// }

// console.log(palindromeIntegers([123, 323, 421, 121]));
// console.log(palindromeIntegers([32, 2, 232, 1010]));

// // Password Validator
// function passwordValidator(password: string): void {
//     let nums: number = 0;
//     let isItLettersNums: boolean = true;

//     let checkp = password.split('');

//     checkp.forEach(x => {
//         if (!isNaN(Number(x))) {
//             nums += 1;
//         }

//         let code = x.charCodeAt(0);
//         if (
//             !(code >= 48 && code <= 57) &&
//             !(code >= 65 && code <= 90) &&
//             !(code >= 97 && code <= 122)
//         ) {
//             isItLettersNums = false;
//         }
//     });

//     let isValid = true;

//     if (password.length < 6 || password.length > 10) {
//         console.log('Password must be between 6 and 10 characters');
//         isValid = false;
//     }

//     if (!isItLettersNums) {
//         console.log('Password must consist only of letters and digits');
//         isValid = false;
//     }

//     if (nums < 2) {
//         console.log('Password must have at least 2 digits');
//         isValid = false;
//     }

//     if (isValid) {
//         console.log('Password is valid');
//     }
// }

// passwordValidator('logIn');
// // ➜ Password must be between 6 and 10 characters
// // ➜ Password must have at least 2 digits

// passwordValidator('MyPass123');
// // ➜ Password is valid

// passwordValidator('Pa$s$s');
// // ➜ Password must consist only of letters and digits
// // ➜ Password must have at least 2 digits


// function matrix(num: number): void {
//     // let x: number[] = [];
//     const x = Array(num).fill(num)
//     // for (let i = 1; i <= num; i++) {
//     //     x.push(num)
//     // }
//     for (let l = 1; l <= num; l++) {
//         console.log(x.join(' '));
//     }

// }

// matrix(3);
// matrix(7);
// matrix(2);



// // 3.	Equal Sums
// function equalSums(arr: number[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         let leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
//         let rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);

//         if (leftSum === rightSum) {
//             console.log(i);
//             return
//         }
//     }
//     console.log('no');
// }

// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


// // 3.	Max Sequence of Equal Elements
// function maxSequence(arr: number[]): void {
//     let maxCount = 1;
//     let maxElement = arr[0];

//     let currentCount = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             currentCount++;
//         } else {
//             currentCount = 1;
//         }

//         if (currentCount > maxCount) {
//             maxCount = currentCount;
//             maxElement = arr[i]
//         }
//     }
//     console.log(Array(maxCount).fill(maxElement).join(' '));

// }


// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);  // 👉 2 2 2
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);        // 👉 1 1 1
// maxSequence([4, 4, 4, 4]);                    // 👉 4 4 4 4
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);     // 👉 1 1


// function magicSum(arr: number[], sum: number): void {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 console.log(arr[i], arr[j]);
//             }
//         }
//     }
// }


// magicSum([1, 7, 6, 2, 19, 23], 8);
// // 👉 1 7
// // 👉 6 2

// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// // 👉 14 13
// // 👉 20 7
// // 👉 19 8

// magicSum([1, 2, 3, 4, 5, 6], 6);
// // 👉 1 5
// // 👉 2 4





// tuk










// Typescrypt


// Lab: Introduction to TypeScript

// interface Rectangle {
//     lenght: number;
//     width: number;
// }

// class RectangleAreaCalculator {
//     private rectangle: Rectangle;

//     constructor(lenght: number, width: number) {
//         this.rectangle = {
//             lenght: lenght,
//             width: width
//         }
//     }

//     public calculateArea(): number {
//         return this.rectangle.lenght * this.rectangle.width;
//     }

//     public printArea(): void {
//         console.log(this.calculateArea());
//     }
// }

// const myRectangle = new RectangleAreaCalculator(5, 7);
// myRectangle.printArea();


// interface LargestNumber {
//     a: number,
//     b: number,
//     c: number
// }
// class CalculateLargest {
//     private largest: LargestNumber;

//     constructor(first: number, second: number, third: number) {
//         this.largest = {
//             a: first,
//             b: second,
//             c: third
//         }
//     }

//     public calculateLargest(): number {
//         return Math.max(this.largest.a, this.largest.b, this.largest.c)
//     }

//     public printLargest(): void {
//         console.log(`The largest number is ${this.calculateLargest()}.`);
//     }
// }

// const largest = new CalculateLargest(5, -3, 16);
// const largest2 = new CalculateLargest(-3, -5, -22.5);

// largest.printLargest();
// largest2.printLargest();

// interface ISummer {
//     printSum(): void;
// }

// class RangeSummer implements ISummer {
//     private start: number;
//     private end: number;

//     constructor(start: string, end: string) {
//         this.start = Number(start);
//         this.end = Number(end);
//     }

//     public calculateSum(): number {
//         let sum: number = 0;
//         for (let i = this.start; i <= this.end; i++) {
//             sum += i
//         }
//         return sum
//     }

//     public printSum(): void {
//         console.log(this.calculateSum());
//     }
// }

// const example1 = new RangeSummer('1', '5');
// example1.printSum();

// const example2 = new RangeSummer('-8', '20');
// example2.printSum();

// 4.	Day of Week

// interface IDayToNumberConverter {
//     printDayNumber(day: string): void;
// }

// class DayOfWeekConverter implements IDayToNumberConverter {
//     private days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     public printDayNumber(day: string): void {
//         // let print: string[] = [];
//         // if (this.days.includes(day)) {
//         //     print.push((this.days.indexOf(day) + 1).toString())
//         // } else {
//         //     print.push('error')
//         // }
//         // console.log(print.join(''));

//         const index = this.days.indexOf(day);
//         index === -1
//             ? console.log('error')
//             : console.log(index + 1)
//     }
// }

// const converter = new DayOfWeekConverter();

// // Пример 1: валиден ден
// converter.printDayNumber('Monday'); // Очакваме: 1

// // Пример 2: друг валиден ден
// converter.printDayNumber('Friday'); // Очакваме: 5

// // Пример 3: невалиден вход
// converter.printDayNumber('Invalid'); // Очакваме: error