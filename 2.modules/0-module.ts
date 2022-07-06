//----------------------------------------~*~----------------------------------------//
// Internal items can't be accessed from outside the module

// Variables
const sessions: ISession[] = [];

//----------------------------------------~*~----------------------------------------//
// Exported items are public

export interface ISession {
    title: string;
}

export class Session implements ISession {
    public title: string;
    public presenter: string;
    constructor(title: string, presenter: string) {
        this.title = title;
        this.presenter = presenter;
    }
}

export function addSession(session: Session): void {
    sessions.push(session);
}

//----------------------------------------~*~----------------------------------------//
// Or export in one place

//export { Session, addSession }
