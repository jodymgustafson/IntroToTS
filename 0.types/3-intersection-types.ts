//----------------------------------------~*~----------------------------------------//
// Intersection types allow you to combine types

type Person = {
    firstName: string;
    lastName: string;
};

type Address = {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
};

type Customer = Person & Address;

const customer: Customer = {
    firstName: "Joe",
    lastName: "Cool",
    line1: "123 Main St.",
    city: "Traverse City",
    state: "MI",
    zip: "49684"
};

//----------------------------------------~*~----------------------------------------//
// Extending intersection types

type Shape = {
    name: string;
    numberOfSides: number;
};

type Rectangle = Shape & {
    width: number;
    height: number;
};

const rect: Rectangle = {
    name: "rectangle",
    numberOfSides: 4,
    width: 3,
    height: 2
};

//----------------------------------------~*~----------------------------------------//

export { }