//----------------------------------------~*~----------------------------------------//
// Import individual items

import { Session, addSessions, createSession } from "./0-module";

(() => {
    const session = addSessions({
        title: "Intro to TypeScript",
        presenter: "Gus"
    }, {
        title: "Advanced TypeScript",
        presenter: "That Guy"
    });

    let session1 = createSession("Session 1", "Presenter 1");
    let session2 = createSession("Session 2", "Presenter 1", "Auditorium");
    addSessions(session1, session2);
})();

//----------------------------------------~*~----------------------------------------//
// Or, Import everything using an alias

import * as IntroToTs from "./0-module";

(() => {
    const session = new IntroToTs.Session("Intro to TypeScript", "Gus");
    IntroToTs.addSession(session);
})();
