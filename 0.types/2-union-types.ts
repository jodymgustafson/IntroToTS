//----------------------------------------~*~----------------------------------------//
// A union type defines a type that can be one of many types

let u: string | number;
u = "a string";
u = 23;
// u = true; // error

//----------------------------------------~*~----------------------------------------//
// Use unions in function type annotations

function logId(id: number | string): void {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
