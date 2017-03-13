let Pocker = require('./pocker');
let Player = require('./player');
let Publisher = require('./publisher');
// let

function Room(id) {
	const _id = id;
	let _strategy;
	let _pocker;
	let _player = [];
	let _publisher = new Publisher();
// get/set
	this.getId = function () {
		return id
	}
	this.setStrategy = function (strategy) {
		_strategy = strategy
	}
	this.getStrategy = function () {
		return _strategy
	}
	this.setPocker = function (pocker) {
		_pocker = pocker;
	}
	this.getPocker = function () {
		return _pocker;
	}
	this.playersNum = function () {
		return _player.length;
	}
	this.getPublisher = function () {
		return _publisher;
	}

// method
	this.init = function () {
		_pocker = new Pocker; // 初始化牌组
		_pocker.shuffle();   // 洗牌
	};
	this.start = function () {
		_publisher.emit('broad', "游戏开始");
	};
	this.addPlayer = function (player, fn) {
		if(1) {
			_player.push(player);
			_publisher.emit('broad', "玩家"+player.getName()+"加入房间");
			return player;
		}
		fn("添加玩家到房间失败!");
		return false;
	};
	this.removePlayer = function (player) {
		let index = this.searchPlayer(player);
		if(index != -1) {
			_publisher.emit('broad', "玩家"+player.getName()+"离开");
			Array.prototype.splice.call(_player, index, 1);
			return player;
		}
		console.log('移除玩家失败, 未找到该玩家')
		return false;
	};
	this.searchPlayer = function (player) {
		return Array.prototype.indexOf.call(_player, player);
	};
	this.rebot = function () {
		console.log("房间正在重启!")
	};

	// event
	const event = {

	}
};

module.exports = Room;
