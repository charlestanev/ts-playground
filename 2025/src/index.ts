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



// function isPerfectNumber(n: number): void {
//     let sum = 0;

//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }

//     if (sum === n) {
//         console.log("We have a perfect number!");
//     } else {
//         console.log("It's not so perfect.");
//     }

// }


// isPerfectNumber(6);        // 👉 We have a perfect number!
// isPerfectNumber(28);       // 👉 We have a perfect number!
// isPerfectNumber(1236498);  // 👉 It's not so perfect.



// function loadingBar(progress: number): void {
//     let percents: number = progress / 10;

//     let left = Array(percents).fill('%');
//     let right = Array(10 - percents).fill('.');
//     console.log(`${progress} [${left.concat(right).join('')}]`);

//     percents === 10
//         ? console.log(`[${left.concat(right).join('')}]`)
//         : console.log('Still loading...')

//     console.log('\n');
// }

// loadingBar(30);
// // 👉 30% [%%%.......]
// // 👉 Still loading...

// loadingBar(50);
// // 👉 50% [%%%%%.....]
// // 👉 Still loading...

// loadingBar(100);
// // 👉 100% Complete!
// // 👉 [%%%%%%%%%%]









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

// function carWash(commands: string[]): void {
//     let sum: number = 0;

//     for (const command of commands) {
//         switch (command) {
//             case 'soap':
//                 sum += 10;
//                 break;
//             case 'water':
//                 sum *= 1.2;
//                 break;
//             case 'vacuum cleaner':
//                 sum *= 1.25;
//                 break;
//             case 'mud':
//                 sum *= 0.9;
//                 break;
//         }
//     }

//     console.log(`The car is ${sum.toFixed(2)}% clean.`);
// }

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// // 👉 The car is 39.00% clean.

// // Number Modification
// function NumberModification(num: number): void {
//     let numArray = num.toString().split('').map(Number);
//     let average = 0;

//     while (average <= 5) {
//         average = ((numArray.reduce((prev, curr) => prev + curr)) / (numArray.length))
//         average <= 5 && numArray.push(9);

//     }
//     console.log(numArray);

// }

// NumberModification(101);
// NumberModification(5835);


// // 1.	Sum First and Last
// function sum(arr: string[]): number {
//     let first = Number(arr.shift());
//     let last = Number(arr.pop());

//     return first + last
// }

// console.log(sum(['20', '30', '40'])); // 👉 60
// console.log(sum(['5', '10']));        // 👉 15
// console.log(sum(['7']));

// // 2.	Negative or Positive Numbers
// function reorderNumbers(arr: number[]): void {
//     let result: number[] = [];

//     for (const i of arr) {
//         i >= 0
//             ? result.push(i)
//             : result.unshift(i)
//     }

//     for (const i of result) {
//         console.log(i);
//     }
//     console.log('\n');

// }

// reorderNumbers([7, -2, 8, 9]);
// reorderNumbers([3, -2, 0, -1]);

// // 3.	First and Last K Numbers
// function firstAndLastK(arr: number[]): void {
//     const k = arr.shift();

//     const first = arr.slice(0, k);
//     const last = arr.slice(-k);


//     console.log(first.join(' '));
//     console.log(last.join(' '));

// }
// firstAndLastK([2, 7, 8, 9]);

// firstAndLastK([3, 6, 7, 8, 9]);


// function printAndSum(start: number, end: number): void {
//   let line = [];
//   let sum: number = 0;

//   for (let i = start; i <= end; i++) {
//     line.push(i + ' ');
//     sum += i;
//   }

//   console.log(line.join(''));
//   console.log(`Sum: ${sum}`);
//   console.log('\n');

// }

// printAndSum(5, 10);
// // Output:
// // 5 6 7 8 9 10
// // Sum: 45

// printAndSum(0, 26);
// // Output:
// // 0 1 2 ... 26
// // Sum: 351

// printAndSum(50, 60);
// // Output:
// // 50 51 52 53 54 55 56 57 58 59 60
// // Sum: 605


// function sumFirstAndLast(arr: string[]): void {
//   const first = Number(arr[0])
//   const last = Number(arr[arr.length - 1]);
//   console.log(first + last);
// }

// sumFirstAndLast(['20', '30', '40']);       // Output: 60
// sumFirstAndLast(['10', '17', '22', '33']); // Output: 43
// sumFirstAndLast(['11', '58', '69']);       // Output: 80

// function dayOfWeek(dayNumber: number): void {
//   const days = [
//     'Monday',    // 1
//     'Tuesday',   // 2
//     'Wednesday', // 3
//     'Thursday',  // 4
//     'Friday',    // 5
//     'Saturday',  // 6
//     'Sunday'     // 7
//   ]

//   dayNumber > 0 && dayNumber <= 7
//     ? console.log(days[dayNumber - 1])
//     : console.log('Invalid day!')
// }

// dayOfWeek(3);  // Output: Wednesday
// dayOfWeek(6);  // Output: Saturday
// dayOfWeek(11); // Output: Invalid day!


// function reverseArray(n: number, elements: number[]): void {
//   const sliced = elements.slice(0, n);
//   const reversed = sliced.reverse();
//   console.log(reversed.join(' '));

// }

// reverseArray(3, [10, 20, 30, 40, 50]);
// // Output: 30 20 10

// reverseArray(4, [-1, 20, 99, 5]);
// // Output: 5 99 20 -1

// function reverseStringsArray(arr: string[]): void {
//   const reversed = arr.reverse();
//   console.log(reversed.join(' '));
// }

// reverseStringsArray(['a', 'b', 'c', 'd', 'e']);
// // Output: e d c b a

// reverseStringsArray(['abc', 'def', 'hig', 'klm', 'nop']);
// // Output: nop klm hig def abc

// reverseStringsArray(['33', '123', '0', 'dd']);
// // Output: dd 0 123 33

// function sumEvenNumbers(arr: string[]): void {
//   const numbers = arr.map(Number);
//   let sum: number = 0;

//   numbers.forEach(x =>
//     x % 2 === 0 && (sum += x)
//   )
//   console.log(sum);

// }
// sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
// // Output: 12

// sumEvenNumbers(['3', '5', '7', '9']);
// // Output: 0

// sumEvenNumbers(['2', '4', '6', '8', '10']);
// // Output: 30

// function evenAndOddSubtraction(arr: number[]): void {

//   let evenSum: number = 0;
//   let oddSum: number = 0;

//   arr.forEach(x => {
//     x % 2 === 0
//       ? evenSum += x
//       : oddSum += x
//   })

//   console.log(evenSum - oddSum);

// }

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// // Output: 3 (12 - 9)

// evenAndOddSubtraction([3, 5, 7, 9]);
// // Output: -24 (0 - 24)

// evenAndOddSubtraction([2, 4, 6, 8, 10]);
// // Output: 30 (30 - 0)



// // 7. Equal Arrays
// function equalArrays(arr1: string[], arr2: string[]): void {
//   const nums1: number[] = arr1.map(Number);
//   const nums2: number[] = arr2.map(Number);

//   if (nums1.length !== nums2.length) {
//     console.log('Arrays are not identical. Found difference at length mismatch.');
//     return;
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] !== nums2[i]) {
//       console.log(`Arrays are not identical. Found difference at ${i} index`);
//       return;
//     }
//   }

//   const sum = nums1.reduce((a, b) => a + b, 0);
//   console.log(`Arrays are identical. Sum: ${sum}`);

// }

// equalArrays(['10', '20', '30'], ['10', '20', '30']);
// // Output: Arrays are identical. Sum: 60

// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// // Output: Arrays are not identical. Found difference at 2 index

// equalArrays(['1'], ['10']);
// equalArrays(['1'], ['10', '10']);
// // Output: Arrays are not identical. Found difference at 0 index



// // 8. Condense Array to Number
// function condenseArrayToNumber(numbers: number[]): void {
//   // Докато масивът има повече от един елемент
//   while (numbers.length > 1) {
//     // Създаваме нов масив с дължина -1
//     const condensed: number[] = [];

//     // Обхождаме всички двойки и ги сумираме
//     for (let i = 0; i < numbers.length - 1; i++) {
//       const sum = numbers[i] + numbers[i + 1];
//       condensed.push(sum);
//     }

//     // Заменяме оригиналния масив с новия
//     numbers = condensed;
//   }

//   // Отпечатваме крайния резултат
//   console.log(numbers[0]);
// }

// condenseArrayToNumber([2, 10, 3]);
// // Output: 25

// condenseArrayToNumber([5, 0, 4, 1, 2]);
// // Output: 35

// condenseArrayToNumber([1]);
// // Output: 1



// // 1. Add and Subtract
// function addAndSubtract(arr: number[]): void {
//   // Суми на оригиналния и новия масив
//   let originalSum = 0;
//   let modifiedSum = 0;

//   // Създаваме нов масив с променени стойности
//   const modifiedArr = arr.map((num, index) => {
//     originalSum += num; // добавяме оригиналната стойност към оригиналната сума

//     // Ако числото е четно → добавяме индекса
//     // Ако е нечетно → изваждаме индекса
//     const modified = num % 2 === 0 ? num + index : num - index;
//     modifiedSum += modified; // добавяме към новата сума

//     return modified; // връщаме промененото число
//   });

//   // Отпечатваме новия масив и двете суми
//   console.log(modifiedArr);
//   console.log(originalSum);
//   console.log(modifiedSum);
// }

// addAndSubtract([5, 15, 23, 56, 35]);
// // Output:
// // [ 5, 14, 21, 59, 31 ]
// // 134
// // 130

// addAndSubtract([-5, 11, 3, 0, 2]);
// // Output:
// // [ -5, 10, 1, 3, 6 ]
// // 11
// // 15



// // Задача 2: Common Elements
// function commonElements(arr1: string[], arr2: string[]): void {
//   for (const element of arr1) {
//     arr2.includes(element) && console.log(element);
//   }
//   console.log();
// }

// commonElements(
//   ['Hey', 'hello', '2', '4', 'Peter', 'e'],
//   ['Petar', '10', 'hey', '4', 'hello', '2']
// );
// // Output:
// // hello
// // 4
// // 2

// commonElements(
//   ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//   ['s', 'o', 'c', 'i', 'a', 'l']
// );
// // Output:
// // o
// // i



// //  Задача 3: Merge Arrays
// function mergeArrays(arr1: string[], arr2: string[]): void {
//   let result: string[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (i % 2 === 0) {
//       const sum = Number(arr1[i]) + Number(arr2[i]);
//       result.push(sum.toString());
//     } else {
//       result.push(arr1[i] + arr2[i]);
//     }
//   }

//   console.log(result.join(' - '));

// }

// mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// // Output: 22 - 1522 - 110 - 5636 - 46

// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
// // Output: 35 - 12312333 - 10 - 77122 - 48


// // Задача 4: Array Rotation
// function arrayRotation(arr: number[], n: number): void {
//   for (let i = 0; i < n; i++) {
//     let first = arr.shift();
//     arr.push(first)
//   }
//   console.log(arr.join(' '));
// }

// arrayRotation([51, 47, 32, 61, 21], 2);
// // Output: 32 61 21 51 47

// arrayRotation([32, 21, 61, 1], 4);
// // Output: 32 21 61 1

// arrayRotation([2, 4, 15, 31], 5);
// // Output: 4 15 31 2



// //  Задача 5: Max Number
// function maxNumber(arr: number[]): void {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     const rightPart = arr.slice(i + 1);
//     const isTop = rightPart.every(x => current > x)
//     isTop && result.push(current)
//   }
//   console.log(result.join(' '));
// }

// maxNumber([1, 4, 3, 2]);
// // Output: 4 3 2

// maxNumber([14, 24, 3, 19, 15, 17]);
// // Output: 24 19 17

// maxNumber([41, 41, 34, 20]);
// // Output: 41 34 20

// maxNumber([27, 19, 42, 2, 13, 45, 48]);
// // Output: 48



// // 6: Equal Sums
// function equalSums(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     const left = arr.slice(0, i);
//     const right = arr.slice(i + 1);

//     const leftSum = left.reduce((acc, curr) => acc + curr, 0);
//     const rightSum = right.reduce((acc, curr) => acc + curr, 0);

//     if (leftSum === rightSum) {
//       console.log(i);
//       return;
//     }

//   }
//   console.log('no');

// }

// // function equalSums(arr: number[]): void {
// //   for (let i = 0; i < arr.length; i++) {
// //     // Вземаме масива отляво (до текущия индекс, но без него)
// //     const left = arr.slice(0, i);

// //     // Вземаме масива вдясно (след текущия индекс)
// //     const right = arr.slice(i + 1);

// //     // Изчисляваме сумите с reduce
// //     const leftSum = left.reduce((a, b) => a + b, 0);
// //     const rightSum = right.reduce((a, b) => a + b, 0);

// //     // Сравняваме
// //     if (leftSum === rightSum) {
// //       console.log(i);
// //       return;
// //     }
// //   }

// //   // Ако не сме намерили такъв индекс
// //   console.log('no');
// // }



// equalSums([1, 2, 3, 3]);
// // Индекс 2:
// // ляво: 1 + 2 = 3
// // дясно: 3
// // Output: 2
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
// // Индекс 3:
// // ляво = 10+5+5 = 20
// // дясно = 3+4+2+5+1+1+4 = 20
// // Output: 3

// // 7: Max Sequence of Equal Elements
// function maxSequence(arr: number[]): void {
//   let bestElement = arr[0];
//   let bestLenght = 1;
//   let currentLenght = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       currentLenght++;
//     } else {
//       currentLenght = 1;
//     }

//     if (currentLenght > bestLenght) {
//       bestLenght = currentLenght;
//       bestElement = arr[i];
//     }
//   }

//   console.log(Array(bestLenght).fill(bestElement).join(' '));

// }

// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // 👉 2 2 2
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);       // 👉 1 1 1
// maxSequence([4, 4, 4, 4]);                   // 👉 4 4 4 4
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);    // 👉 1 1



// function magicSum(arr: number[], targetSum: number): void {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === targetSum) {
//         if (arr[i] === arr[j]) {
//           continue;
//         }
//         console.log(`${arr[i]} ${arr[j]}`);
//       }
//     }
//   }
//   console.log();

// }

// magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);


// // 1: Repeat String
// function repeatString(text: string, count: number): string {
//   return text.repeat(count)
// }

// console.log(repeatString("abc", 3)); // ➜ abcabcabc

// // Още пример с дума "String" повторена 2 пъти
// console.log(repeatString("String", 2)); // ➜ StringString

// function formatGrade(grade: number): void {

//   // Ако оценката е по-малка от 3.00, студентът е скъсан
//   // В този случай отпечатваме "Fail (2)" със закована стойност 2
//   if (grade < 3.00) {
//     console.log("Fail (2)");

//     // Ако оценката е между 3.00 и 3.49 включително — отпечатваме Poor
//   } else if (grade < 3.50) {
//     console.log(`Poor (${grade.toFixed(2)})`);

//     // Ако е между 3.50 и 4.49 — отпечатваме Good
//   } else if (grade < 4.50) {
//     console.log(`Good (${grade.toFixed(2)})`);

//     // Ако е между 4.50 и 5.49 — отпечатваме Very good
//   } else if (grade < 5.50) {
//     console.log(`Very good (${grade.toFixed(2)})`);

//     // Ако е 5.50 или повече — отпечатваме Excellent
//   } else {
//     console.log(`Excellent (${grade.toFixed(2)})`);
//   }
// }

// formatGrade(3.33);   // 👉 Poor (3.33)
// formatGrade(4.50);   // 👉 Very good (4.50)
// formatGrade(2.99);   // 👉 Fail (2)
// formatGrade(5.70);   // 👉 Excellent (5.70)
// formatGrade(3.50);   // 👉 Good (3.50)



// Създаваме функция, която приема две числа:
// // num е основата (числото, което ще повдигаме на степен)
// // power е степента (колко пъти ще умножим числото по себе си)
// function mathPower(num: number, power: number): number {

//   // Създаваме променлива, в която ще пазим резултата — започваме от 1
//   let result = 1;

//   // Изпълняваме цикъл, който се върти "power" пъти
//   for (let i = 0; i < power; i++) {

//     // На всяка стъпка умножаваме текущия резултат по числото "num"
//     result *= num;
//   }

//   // След като сме завършили повтарянето, връщаме резултата
//   return result;
// }

// console.log(mathPower(2, 8)); // 👉 256
// console.log(mathPower(3, 4)); // 👉 81
// console.log(mathPower(5, 0)); // 👉 1 (всяко число на степен 0 е 1)
// console.log(mathPower(10, 2)); // 👉 100




// function simpleCalculator(numOne: number, numTwo: number, operator: string): void {
//   const multiply = (a: number, b: number) => { a * b }
//   const divide = (a: number, b: number) => a / b;
//   const add = (a: number, b: number) => a + b;
//   const subtract = (a: number, b: number) => a - b;

//   const result =
//     operator === 'multiply' ? multiply(numOne, numTwo)
//       : operator === 'divide' ? divide(numOne, numTwo)
//         : operator === 'add' ? add(numOne, numTwo)
//           : operator === 'subtract' ? subtract(numOne, numTwo)
//             : NaN;

//   console.log(result);

// }

// simpleCalculator(5, 5, 'multiply');
// simpleCalculator(40, 8, 'divide');
// simpleCalculator(12, 19, 'add');
// simpleCalculator(50, 13, 'subtract');



// // 6. Sign Check
// function signCheck(numOne: number, numTwo: number, numThree: number): void {
//   let negativeCount = 0;

//   numOne < 0 && negativeCount++;
//   numTwo < 0 && negativeCount++;
//   numThree < 0 && negativeCount++;

//   numOne === 0 || numTwo === 0 || numThree === 0
//     ? console.log('Positive')
//     : negativeCount % 2 !== 0
//       ? console.log('Negative')
//       : console.log('Positive');

// }

// signCheck(5, 12, -15);   // 👉 Negative
// signCheck(-6, -12, 14);  // 👉 Positive
// signCheck(-1, -2, -3);   // 👉 Negative
// signCheck(-5, 1, 1);     // 👉 Negative
// signCheck(0, -2, 3);     // 👉 Positi ve (0 го приемаме като неутрално)



// // 1. Smallest of Three Numbers
// // Създаваме функция, която приема три числа като параметри
// function smallestOfThree(num1: number, num2: number, num3: number): void {

//   // Създаваме променлива, която ще съдържа най-малкото число – започваме от първото
//   let smallest = num1;

//   // Ако второто число е по-малко от текущото най-малко – обновяваме стойността
//   if (num2 < smallest) {
//     smallest = num2;
//   }

//   // Ако третото число е по-малко от текущото най-малко – обновяваме стойността
//   if (num3 < smallest) {
//     smallest = num3;
//   }

//   // Отпечатваме най-малкото от трите числа
//   console.log(smallest);
// }


// smallestOfThree(2, 5, 3);         // 👉 2
// smallestOfThree(600, 342, 123);  // 👉 123
// smallestOfThree(25, 21, 4);      // 👉 4


// // 2: Add and Subtract
// function addAndSubtract(a: number, b: number, c: number): void {

//   function sum(a: number, b: number) {
//     return a + b;
//   }

//   function substract(sum: number, c: number): number {
//     return sum - c;
//   }

//   function result() {
//     let result = substract(sum(a, b), c);
//     console.log(result);
//   }

//   result();
// }

// addAndSubtract(23, 6, 10);   // 👉 19
// addAndSubtract(1, 17, 30);   // 👉 -12
// addAndSubtract(42, 58, 100); // 👉 0



// // 3: Characters in Range
// function charactersInRange(char1: string, char2: string): void {
//   const code1 = char1.charCodeAt(0);
//   const code2 = char2.charCodeAt(0);

//   const start = Math.min(code1, code2);
//   const end = Math.max(code1, code2);

//   const result: string[] = [];

//   for (let i = start + 1; i < end; i++) {
//     result.push(String.fromCharCode(i));
//   }
//   console.log(result.join(' '));
// }

// charactersInRange('a', 'd');     // 👉 b c
// charactersInRange('#', ':');     // 👉 $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
// charactersInRange('C', '#');     // 👉 $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B



// function oddAndEvenSum(number: number): void {
//   let oddSum: number = 0;
//   let evenSum: number = 0;

//   let arr = number.toString().split('').map(Number);
//   arr.forEach(x => {
//     x % 2 == 0
//       ? evenSum += x
//       : oddSum += x
//   })

//   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

// }

// oddAndEvenSum(1000435);           // 👉 Odd sum = 9, Even sum = 4
// oddAndEvenSum(3495892137259234);  // 👉 Odd sum = 54, Even sum = 22



// // 5. Palindrome Integers
// function palindromeIntegers(arr: number[]): void {
//   arr.forEach(x => {
//     let reverse = Number(x.toString().split('').reverse().join(''));
//     x === reverse
//       ? console.log(true)
//       : console.log(false);
//   })

//   console.log();
// }

// palindromeIntegers([123, 323, 421, 121]);
// // 👉 false
// // 👉 true
// // 👉 false
// // 👉 true

// palindromeIntegers([32, 2, 232, 1010]);
// // 👉 false
// // 👉 true
// // 👉 true
// // 👉 false



// function passwordValidator(password: string): void {
//   const isLengthValid = password.length >= 6 && password.length <= 10;

//   const isAlphanumeric = /^[A-Za-z0-9]+$/.test(password);

//   let digitCount = 0;
//   for (const char of password) {
//     if (!isNaN(Number(char))) {
//       digitCount++;
//     }
//   }

//   const hasAtLeastTwoDigits = digitCount >= 2;

//   if (isLengthValid && isAlphanumeric && hasAtLeastTwoDigits) {
//     console.log("Password is valid");
//   } else {
//     if (!isLengthValid) {
//       console.log("Password must be between 6 and 10 characters");
//     }
//     if (!isAlphanumeric) {
//       console.log("Password must consist only of letters and digits");
//     }
//     if (!hasAtLeastTwoDigits) {
//       console.log("Password must have at least 2 digits");
//     }
//   }

//   console.log();

// }

// passwordValidator('logIn');
// // 👉 Password must be between 6 and 10 characters
// // 👉 Password must have at least 2 digits

// passwordValidator('MyPass123');
// // 👉 Password is valid

// passwordValidator('Pa$s$s');
// // 👉 Password must consist only of letters and digits
// // 👉 Password must have at least 2 digits



// // 7. NxN Matrix
// function nxnMatrix(n: number): void {
//   const row = new Array(n).fill(n).join(' ');
//   for (let i = 0; i < n; i++) {
//     console.log(row);
//   }
// }

// nxnMatrix(3);
// // 👉 3 3 3
// // 👉 3 3 3
// // 👉 3 3 3

// nxnMatrix(2);
// // 👉 2 2
// // 👉 2 2


// 8. Perfect Number


// // 9: Loading Bar
// function loadingBar(progress: number): void {
//   let loading: string[] = [];
//   let percents = progress / 10;

//   for (let i = 0; i < percents; i++) {
//     loading.push('%');
//   }
//   for (let i = percents + 1; i <= 10; i++) {
//     loading.push('.')
//   }

//   progress !== 100
//     ? console.log(`${progress}% [${loading.join('')}]${'\n'}Still loading...`)
//     : console.log(`${progress}% Complete!${'\n'}[%%%%%%%%%%]`)
//   console.log();

// }

// loadingBar(30);
// // 👉 30% [%%%.......]
// // 👉 Still loading...

// loadingBar(50);
// // 👉 50% [%%%%%.....]
// // 👉 Still loading...

// loadingBar(70);
// // 👉 100% Complete!
// // 👉 [%%%%%%%%%%]

// loadingBar(100);
// // 👉 100% Complete!
// // 👉 [%%%%%%%%%%]


// // Perfect Number
// function perfectNumber(num: number): void {
//   let sum = 0;

//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }

//   if (sum == num) {
//     console.log("We have a perfect number!")
//   } else {
//     console.log("It's not so perfect.")
//   }
// }

// perfectNumber(6);        // 👉 We have a perfect number!
// perfectNumber(28);       // 👉 We have a perfect number!
// perfectNumber(1236498);  // 👉 It's not so perfect.


// // Lab: Arrays Advanced
// function negativeOrPositive(arr: number[]): void {
//   let result = [];
//   for (const i of arr) {
//     i < 0
//       ? result.unshift(i)
//       : result.push(i)
//   }

//   result.forEach(x => console.log(x))
// }

// negativeOrPositive([7, -2, 8, 9]);
// // 👉 -2
// // 👉 7
// // 👉 8
// // 👉 9

// negativeOrPositive([3, -2, 0, -1]);
// // 👉 -1
// // 👉 -2
// // 👉 3
// // 👉 0


// function firstAndLastKNumbers(arr: number[]): void {
//   let k = arr.shift();
//   let firstK = arr.slice(0, k);
//   let lastK = arr.slice(-k)

//   console.log(firstK.join(' ') + "\n" + lastK.join(' '));
// }

// firstAndLastKNumbers([2, 7, 8, 9]);
// // 👉 7 8
// // 👉 8 9

// firstAndLastKNumbers([3, 6, 7, 8, 9]);
// // 👉 6 7 8
// // 👉 7 8 9

// // 4: Last K Numbers Sequence
// function lastKNumbersSequence(n: number, k: number): void {
//   const sequence: number[] = [1];
//   for (let i = 1; i < n; i++) {
//     const startIndex = Math.max(0, i - k);
//     const lastK = sequence.slice(startIndex, i);
//     const sum = lastK.reduce((a, b) => a + b, 0)
//     sequence.push(sum)
//   }
//   console.log(sequence);
// }

// lastKNumbersSequence(6, 3);
// // 👉 1 1 2 4 7 13

// lastKNumbersSequence(8, 2);
// // 👉 1 1 2 3 5 8 13 21


// // 6.	Smallest Two Numbers
// function smallestTwoNumbers(arr: number[]): void {
//   let result = arr
//     .sort((a, b) => a - b)
//     .splice(0, 2)
//     .join(' ')
//   console.log(result);

// }

// smallestTwoNumbers([30, 15, 50, 5]);
// // 👉 5 15

// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
// // 👉 0 3


// // 7.	List of Products
// function listOfProducts(products: string[]): void {
//   let ordered = products
//     .sort((a, b) => a.localeCompare(b))
//     .forEach((x, i) => {
//       console.log(`${i + 1}.${x}`);
//     })
// }

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
// // 👉 1.Apples
// // 👉 2.Onions
// // 👉 3.Potatoes
// // 👉 4.Tomatoes

// 8.	Array Manipulations
function arrayManipulations(input: string[]): void {
  let numbers = input.shift().split(' ').map(Number);

  input.forEach((x, i) => {
    let [command, num1, num2] = [...x.split(' ')];

    switch (command) {
      case 'Add':
        const number = Number(num1);
        numbers.push(number)
        break;

      case 'Remove':
        const numberToRemove = Number(num1);
        numbers = numbers.filter((x) => x !== numberToRemove)
        break;

      case 'RemoveAt':
        const numberToRemoveAt = Number(num1);
        numbers = numbers.filter((_, i) => i !== numberToRemoveAt)
        break;

      case 'Insert':
        const insert = Number(num1);
        const at = Number(num2);
        numbers.splice(at, 0, insert)
        break;

      default:
        break;
    }
  })

  console.log(numbers.join(' '));
}

arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3'
]);
// 👉 4 53 6 8 43 3
