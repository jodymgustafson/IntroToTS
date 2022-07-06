//----------------------------------------~*~----------------------------------------//
// Import individual items

import { Session, addSession } from "./0-module";

(() => {
    const session = new Session("Intro to TypeScript", "Gus");
    addSession(session);
})();

//----------------------------------------~*~----------------------------------------//
// Or, Import everything using an alias

import * as IntroToTs from "./0-module";

(() => {
    const session = new IntroToTs.Session("Intro to TypeScript", "Gus");
    IntroToTs.addSession(session);
})();
