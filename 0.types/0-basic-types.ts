// TypeScript basic types

let n: number;
n = 4;

// Type can be inferred
let s = "TypeScript";

let myBool = true;

let myArray: string[] = [];//["one", "two", "three"];

let anything: any = "something";
anything = 2;
anything = { x: 0, y: 0 };
anything = myArray;
anything = () => myBool;

enum CardSuit {
    Spades = 0,
    Clubs,
    Diamonds,
    Hearts
}
let suit = CardSuit.Spades;
let suitName = CardSuit[suit]; // => "Spades"

// Specify return type for function
function concat(s: string, n: number): string {
    //return n; // error
    return s + n;
}
s = concat("The number is: ", 1);

function doSomething(): void {
    //return 1; // error
}
