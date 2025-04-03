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
