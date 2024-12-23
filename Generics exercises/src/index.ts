// // Lab: Generics
// // 1.	Generic Box of String
// // Create a generic class Box that takes one property from the constructor. This property must be initialized with generic type. Create a toString() method that returns a message in the following format: "{data} is of type {type}".
// // Examples
// // Input	Output
// // let box1 = new Box(['test']);
// // let box2 = new Box(20);
// // let box3 = new Box('Hello');

// // console.log(box1.toString());
// // console.log(box2.toString());
// // console.log(box3.toString());	test is of type object
// // 20 is of type number
// // Hello is of type string

// class Box<T> {
//     private _data: T;

//     constructor(data: T) {
//         this._data = data;
//     }

//     toString(): string {
//         return `${this._data} is of type ${typeof this._data}`
//     }
// }

// const box1 = new Box(['test']);
// const box2 = new Box(20);
// const box3 = new Box('Hello');

// console.log(box1.toString());
// console.log(box2.toString());
// console.log(box3.toString());


// // 2.	Generic Compare Elements
// // Create a generic class that has as a property an array of generic type. Create a compare(comparator) method that takes an argument of any type. Iterate through the array and compare each element of the array to the comparator and return how many times the comparator is matched.
// // Examples
// // Input	Output
// // let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

// // console.log(c.compare('b'));
// // 	2
// // let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

// // console.log(c.compare(1));	3

// class CompareElements<T> {
//     private elements: T[];

//     constructor(elements: T[]) {
//         this.elements = elements
//     }

//     public compare(comparator: T) {
//         let count = 0;

//         for (const element of this.elements) {
//             if (element === comparator) {
//                 count++;
//             }
//         }

//         return count;
//     }
// }

// let a = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(a.compare('b'));

// let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
// console.log(c.compare(1));
