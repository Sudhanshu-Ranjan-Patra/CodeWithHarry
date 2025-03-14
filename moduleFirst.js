//const simple = require("./moduleSecond");
import * as a from "./moduleSecond.mjs";
import {simple2 as fun} from "./moduleSecond.mjs";

import {simple, simple2} from "./moduleSecond.mjs";

import temp from "./moduleSecond.mjs";

simple();
fun();
simple2();
temp();
console.log(a.simple2())  // Print the return value of simple2 function

