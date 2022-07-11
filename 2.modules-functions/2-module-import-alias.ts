//----------------------------------------~*~----------------------------------------//
// Or, Import everything using an alias

import * as Sessions from "./0-module";

Sessions.addSession({
    title: "Intro to TypeScript",
    presenter: "This Guy",
    room: "Room 111",
    when: new Date(2022, 6, 27, 14, 0)
});

const session = Sessions.addSession("Advanced TypeScript", "That Guy", "Room 111");
console.log(session);

const session1 = Sessions.createSession("Session 1", "Presenter 1");
const session2 = Sessions.createSession("Session 2", "Presenter 1", "Auditorium");
Sessions.addSessions(session1, session2);

const sessionsInUnknownRooms = Sessions.getSessions(s => s.room === "unknown");
console.log(sessionsInUnknownRooms);
