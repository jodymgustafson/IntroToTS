// Import everything
import * as IntroToTs from "./4-0-module";

(function ()
{
    var session = new IntroToTs.Session("Intro to TypeScript", "Gus");
    IntroToTs.addSession(session);
})();


// OR import individual items...

import {Session, addSession} from "./4-0-module";

(function ()
{
   var session = new Session("Intro to TypeScript", "Gus");
   addSession(session);
})();
