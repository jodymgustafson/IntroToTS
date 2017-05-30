namespace IntroToTS
{
    interface ISession
    {
        title: string;
    }

    var sessions: ISession[] = [];

    // Arrow functions
    function findSession(title: string): ISession
    {
        // Without arrow function
        var result = sessions.filter(function (session)
        {
            return session.title === title;
        });

        // With arrow function
        result = sessions.filter((session) =>
        {
            return session.title === title;
        });

        // Without curly braces result of expression is returned automatically
        result = sessions.filter(session => session.title === title);

        return result.length > 0 ? result[0] : null;
    }

    class Session implements ISession
    {
        public title: string;
        public presenter: string;
        public room: string;

        constructor(title: string, presenter: string, room = "Unknown")
        {
            this.title = title;
            this.presenter = presenter;
        }

        // Arrow function captures "this"
        public addClickHandler(): void
        {
            let likeButton = <HTMLButtonElement>document.getElementById("like-button");
            likeButton.addEventListener("click", event =>
            {
                likeButton.innerText = `You liked ${this.title} by ${this.presenter} in ${this.room}`;
            });
        }
    }
}