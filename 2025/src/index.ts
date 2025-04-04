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




// function biggest(first: string[], second: string[]): void {
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

// biggest(['10', '20', '30'], ['10', '20', '30']);
// biggest(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// biggest(['1'], ['10']);

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