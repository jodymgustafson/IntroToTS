//----------------------------------------~*~----------------------------------------//
// Import individual items

import { addSession, addSessions, createSession, getSessions } from "./0-module";

addSession({
    title: "Intro to TypeScript",
    presenter: "This Guy",
    room: "Room 111",
    when: new Date(2022, 6, 27, 14, 0)
});

const session = addSession("Advanced TypeScript", "That Guy", "Room 111");
console.log(session);

const session1 = createSession("Session 1", "Presenter 1");
const session2 = createSession("Session 2", "Presenter 1", "Auditorium");
addSessions(session1, session2);

const sessionsInUnknownRooms = getSessions(s => s.room === "unknown");
console.log(sessionsInUnknownRooms);
