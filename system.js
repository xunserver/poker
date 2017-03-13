let Room = require('./room');

let System = (function () {
	let _rooms = [];
	let _players = [];
	let roomId = 0;
	return {
		getRooms() {
			return _rooms
		},
		getPlayers() {
			return _players
		},
		searchPlayer(player) {
			let index = Array.prototype.indexOf.call(_players);
			if(index == -1) {
				fn("没有在系统中找到该玩家", player.name);
				return false
			}
			return index;
		},
		searchRoom(room) {
			let index = Array.prototype.indexOf.call(_rooms);
			if(index == -1) {
				fn("没有在系统中找到该房间", room.id);
				return false
			}
			return index;
		},
		createRoom() {
			let room = new Room(roomId++);
			_rooms.push(room);
			return room
		},
		removeRoom(room) {
			let index = this.searchRoom(room)
			if(index != -1) {
				Array.prototype.splice(_rooms, index, 1);
				return room
			}
			return false;
		}
	}
})()

module.exports = System;
