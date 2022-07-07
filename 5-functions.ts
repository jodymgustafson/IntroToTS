// import { Point2D } from "./0.types/1-user-types";
// import { Rectangle, Shape, Triangle } from "./0.types/3-intersection-types";

// function translate(shape: Shape, dx: number, dy: number): void {
//     for (const p of shape.points) {
//         p.x += dx;
//         p.y += dy;
//     }
// }

// function getArea(shape: Shape): number {
//     if (shape.numberOfSides === 3) {
//         const p1 = shape.points[0];
//         const p2 = shape.points[1];
//         const p3 = shape.points[2];
//         return .5 * Math.abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y))
//     }
//     if (shape.numberOfSides === 4) {
//         const rect = shape as Rectangle;
//         return rect.width * rect.height;
//     }
// }

// export function createRectangle(points: [Point2D, Point2D, Point2D, Point2D]): Rectangle {
//     const width = Math.abs(points[0].x - points[2].x);
//     const height = Math.abs(points[0].y - points[2].y);

//     return {
//         name: "rectangle",
//         numberOfSides: 4,
//         points,
//         width,
//         height,
//         getArea: () => width * height,
//         isSquare: () => width === height
//     };

//     return {
//         points,
//         name: "rectangle",
//         numberOfSides: 4,
//         height: Math.abs(points[0].y - points[2].y),
//         width: Math.abs(points[0].x - points[2].x),
//         getArea: () => this.width * this.height,
//         isSquare: () => this.width === this.height,
//         translate: (dx: number, dy: number) => translate(this, dx, dy)
//     } as Rectangle;
// }

// const shapes: IShape[] = [];

// // shapes.push(new Triangle([
// //     { x: 0, y: 0},
// //     { x: 0, y: 2},
// //     { x: 3, y: 0},
// // ]));

// const w = 3;
// const h = 2;

// shapes.push(createRectangle([
//     { x: 0, y: 0},
//     { x: 0, y: h},
//     { x: w, y: h},
//     { x: w, y: 0}
// ]));

// console.log(shapes[0].toString());
// console.log(shapes[0].getArea());

// console.log(shapes[1].toString());
// console.log(shapes[1].getArea());
// console.log((shapes[1] as Rectangle).isSquare());



export type Session = {
    title: string;
    presenter: string;
    room: string;
};

// const sessions: Session[] = [];

// export function addSession(session: Session) {

// }
// class Session implements ISession {
//     public title: string;
//     public presenter: string;
//     public room: string;

//     // Optional parameters
//     constructor(title: string, presenter: string, room?: string) {
//         this.setProperties(title, presenter, room);
//     }

//     // Default values
//     private setProperties(title: string, presenter: string, room: string = "Unknown"): void {
//         this.title = title;
//         this.presenter = presenter;
//         this.room = room;
//     }
// }

const sessions: Session[] = [];

//----------------------------------------~*~----------------------------------------//
// Rest parameters

function addSessions(...sessions: Session[]): void {
    sessions.forEach(function (session) {
        addSession(session);
    });
}

let session1 = new Session("Session 1", "Presenter 1");
let session2 = new Session("Session 2", "Presenter 1", "Auditorium");
addSessions(session1, session2);

//----------------------------------------~*~----------------------------------------//
// Function overloading

function addSession(session: Session): void;
function addSession(title: string, presenter: string): Session;
//function addSession(sessionOrTitle: any, presenter?: string):any
function addSession(sessionOrTitle: Session | string, presenter?: string): void | Session {
    if (sessionOrTitle instanceof Session) {
        sessions.push(sessionOrTitle);
    }
    else {
        const session = new Session(sessionOrTitle, presenter);
        sessions.push(session);
        return session;
    }
}

addSession(session1);
var session3 = addSession("Session 3", "Presenter 3");
