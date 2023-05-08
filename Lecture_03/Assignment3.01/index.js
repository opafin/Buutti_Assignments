// const pi = require("mathjs").pi; works too
// const round = require("mathjs").round; works too

//to get import to work, you need to add "type": "module" to package.json
import { pi, round } from "mathjs";

console.log(round(pi, 10));
