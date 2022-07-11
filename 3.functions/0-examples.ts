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

/** Add a session */
export function addSession(session: Session): void;

/**
 * Create and add a session
 * @returns The new session
 */
export function addSession(title: string, presenter: string, room?: string, when?: Date): Session;

// The "real" implementation
export function addSession(sessionOrTitle: Session | string, presenter?: string, room = "unknown", when?: Date): void | Session {
    if (typeof sessionOrTitle === "string") {
        const session = createSession(sessionOrTitle, presenter!, room, when);
        sessions.push(session);
        return session;
    }
    else {
        sessions.push(sessionOrTitle);
    }
}
