//----------------------------------------~*~----------------------------------------//
// Use export keyword to make accessible from outside the module
// Or export all in one place using:
// export { Session, addSessions }

export type Session = {
    title: string;
    presenter: string;
    room?: string;
    when?: Date;
};


//----------------------------------------~*~----------------------------------------//
// Non-exported items can't be accessed from outside the module

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

export function createSession(title: string, presenter: string, room = "unknown", when?: Date): Session {
    return {
        title: title,
        presenter: presenter,
        room: room,
        when: when
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

type SessionFilter = (session: Session) => boolean;

export function getSessions(filterFn?: SessionFilter): Session[] {
    if (filterFn) {
        return sessions.filter(filterFn);
    }
    else {
        return sessions;
    }
}
