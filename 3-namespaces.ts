// Namespaces (and modules) can contain anything...
namespace IntroToTS
{
    // Interfaces
    interface ISession
    {
        title: string;
    }

    // Variables
    var sessions: ISession[] = [];

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
}

// Without export, nothing is visible outside module
(function ()
{
    var session = new IntroToTS.Session("Intro to TypeScript", "Gus");
    IntroToTS.addSession(session);
})();