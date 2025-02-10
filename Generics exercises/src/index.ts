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
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    public toString(): string {
        return `${this._value} is of type ${typeof this._value}`;
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString()); 