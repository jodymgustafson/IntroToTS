// Interfaces
interface ISession
{
    title: string;
}

// Variables
let sessions: ISession[] = [];

/////////////// Exported Items ///////////////////////////////////

// Classes
export class Session implements ISession
{
    public title: string;
    public presenter: string;
    constructor(title: string, presenter: string)
    {
        this.title = title;
        this.presenter = presenter;
    }
}

// Functions
export function addSession(session: Session): void
{
    sessions.push(session);
}

// Or export in one place
//export { Session, addSession }