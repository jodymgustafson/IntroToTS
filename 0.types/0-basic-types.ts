//----------------------------------------~*~----------------------------------------//
// TypeScript basic types
// Type annotations use postfix notation

let n: number;
n = 4;

// Type inference
let s = "TypeScript";

let myBool = true;

let myArray: string[];
myArray = [ "one", "two", "three" ];

let anything: any = "something";
anything = 2;
anything = { x: 0, y: 0 };
anything = myArray;
anything = myBool;
anything = (x: number, y: number) => x * y;

// Note: the default type is any
let value;
value = "default type is any";

//----------------------------------------~*~----------------------------------------//

enum CardSuit {
    Spades = 0,
    Clubs,
    Diamonds,
    Hearts
}
let suit = CardSuit.Spades;
let suitName = CardSuit[suit]; // => "Spades"

//----------------------------------------~*~----------------------------------------//
// Specify parameters and return type for a function

function concat(s: string, n: number): string {
    //return n; // error
    return s + n;
}
s = concat("The number is: ", 1);

//----------------------------------------~*~----------------------------------------//
// Be kind, always specify a return type!

// When not specified the return type will be inferred
function logMessage(msg: string) {
    console.log(msg);
    return 1;
}

//----------------------------------------~*~----------------------------------------//
// void

function logError(msg: string): void {
    console.error(msg);
    //return 1; // error
}

export {}