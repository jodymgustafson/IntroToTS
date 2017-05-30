namespace IntroToTS
{
    interface ISession
    {
        title: string;
    }

    class Session implements ISession
    {
        public title: string;
        public presenter: string;
        public room: string;

        // Optional parameters
        constructor(title: string, presenter: string, room?: string)
        {
            this.setProperties(title, presenter, room);
        }

        // Default values
        private setProperties(title: string, presenter: string, room: string = "Unknown"): void
        {
            this.title = title;
            this.presenter = presenter;
            this.room = room;
        }
    }

    var sessions: Session[] = [];

    // Rest parameters
    function addSessions(...sessions: Session[]): void
    {
        sessions.forEach(function (session)
        {
            addSession(session);
        });
    }

    let session1 = new Session("Session 1", "Presenter 1");
    let session2 = new Session("Session 2", "Presenter 1", "Auditorium");
    addSessions(session1, session2);


    // Function overloading
    function addSession(session: Session)                       :void;
    function addSession(title: string,       presenter: string) :Session;
    //function addSession(sessionOrTitle: any, presenter?: string):any
    function addSession(sessionOrTitle: Session | string, presenter?: string) :void | Session // Union types
    {
        if (sessionOrTitle instanceof String)
        {
            let session = new Session(<string>sessionOrTitle, presenter);
            sessions.push(session);
            return session;
        }
        else
        {
            sessions.push(<Session>sessionOrTitle);
        }
    }

    addSession(session1);
    var session3 = addSession("Session 3", "Presenter 3");
}
