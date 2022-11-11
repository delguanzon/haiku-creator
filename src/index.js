import Haiku from './../src/js/haiku.js';

let haiku = new Haiku();
haiku.setEntry('I run, fall, rerun\nFall, get back up, and then I\ndrink from water cup');
console.log(haiku);
haiku.generateNew();
console.log(haiku.entry);

