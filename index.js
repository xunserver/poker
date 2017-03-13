let System = require('./system');
let Player = require('./player');

let p1 = new Player(1, "y1");
let p2 = new Player(2, "y2");

let room1 = System.createRoom();
let room2 = System.createRoom();
p1.joinRoom(room1);
p2.joinRoom(room1);
p2.quitRoom();
p1.quitRoom();


console.log(room1.playersNum());
