let Room = require('./room');
let System = require('./system');

function Player(id, name) {
	const _id = id;   // 禁止修改id
	let _name = name;
	let _room;
	let _pub;

	// _method
	let event = function (type, fn) {
		_pub.on(type, fn, _id);
	}

	// set/get
	this.getId = function () {
		return _id;
	}
	this.getName = function () {
		return _name;
	}

	// method
	this.rename = function (newName) {
		_name = newName;
	}
	this.joinRoom = function (Room) {
		_room = Room;
		_pub = _room.getPublisher()
		Room.addPlayer(this);
		// 监听房间消息
		event('broad', function (message) {
			console.log(message, _name);
		})
		return this;
	}
	this.quitRoom = function () {
		_room.removePlayer(this);
		_room = null;
		// 移除监听房间消息
		_pub.remove('broad', _id);
		return this;
	}
}

module.exports = Player;
