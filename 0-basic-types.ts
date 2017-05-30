// TypeScript basic types

let n: number;
n = 4;

// Type can be inferred
let s = "TypeScript";

let b = true;

let myArray: string[] = [];//["one", "two", "three"];

let something: any = "something";
something = 2;
something = { x: 0, y: 0 };
something = myArray;
something = function() { return b; };

enum CardSuit
{
	Spades = 0,
	Clubs,
	Diamonds,
	Hearts
}
let suit = CardSuit.Spades;
let suitName = CardSuit[suit]; // => "Spades"


function concat(s: string, n: number): string
{
	//return n; // error
	return s + n;
}
s = concat("The number is: ", 1);

function doSomething(): void {
	// do something...
	//return 1; // error
}
