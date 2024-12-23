// Lab: Generics
// 1.	Generic Box of String
// Create a generic class Box that takes one property from the constructor. This property must be initialized with generic type. Create a toString() method that returns a message in the following format: "{data} is of type {type}".
// Examples
// Input	Output
// let box1 = new Box(['test']);
// let box2 = new Box(20);
// let box3 = new Box('Hello');

// console.log(box1.toString());
// console.log(box2.toString());
// console.log(box3.toString());	test is of type object
// 20 is of type number
// Hello is of type string

class Box<T> {
    private _data: T;

    constructor(data: T) {
        this._data = data;
    }

    toString(): string {
        return `${this._data} is of type ${typeof this._data}`
    }
}

const box1 = new Box(['test']);
const box2 = new Box(20);
const box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
