//----------------------------------------~*~----------------------------------------//

type Session = {
    title: string;
    presenter: string;
    room?: string;
    dateTime?: Date;
};

const sessions: Session[] = [];

//----------------------------------------~*~----------------------------------------//
// Rest parameters are arrays

export function addSessions(...sessions: Session[]): void {
    for (const session of sessions) {
        addSession(session);
    };
}

//----------------------------------------~*~----------------------------------------//
// Optional parameters can have default values or be undefined

export function createSession(title: string, presenter: string, room = "unknown", dateTime?: Date): Session {
    return {
        title: title,
        presenter: presenter,
        room: room,
        dateTime: dateTime
    };
}

//----------------------------------------~*~----------------------------------------//
// Function overloading

// First define your function signatures

export function addSession(session: Session): void;

export function addSession(title: string, presenter: string, room?: string, dateTime?: Date): Session;

// Merge the parameters and return types for the "real" implementation

export function addSession(sessionOrTitle: Session | string, presenter?: string, room = "unknown", dateTime?: Date): void | Session {
    if (typeof sessionOrTitle === "string") {
        const session = createSession(sessionOrTitle, presenter!, room, dateTime);
        sessions.push(session);
        return session;
    }
    else {
        sessions.push(sessionOrTitle);
    }
}
