class Poker {

	constructor(n = 54) {
		this.decksArray = [];
		this.decks = [];
		this.length = n;
		for (let i = 0; i < n; i++) {
			this.decksArray[i] = i;
			this.decks[i] = formatDeck(i);
		}
	}
	// 洗牌
	shuffle() {
		let n = this.length - 1;
		for(let i = n; i >= 0; i--)   {  
		    Swap(this.decksArray, i, rand(0, i + 1)); 
		} 
		for(let i = n; i >= 0; i--)   {  
		    this.decks[i] = formatDeck(this.decksArray[i]);
		} 
	}
	// 获取牌
	getDecks() {
		return this.decks;
	}
	// 获取牌数组
	getDecksArray() {
		return this.decksArray;
	}

	// 展示所有牌
	show() {
		console.log(this.decksArray, this.decks);
	}
}

function formatDeck(n) {
	n = n + 1; 
	return  deck = {
		type: Math.ceil(n/13), 
		number: n % 14
	}
}

function rand(start = 1, end = 54, isInt = true) {
	if(isInt) {
		let num = (end - start + 1) * Math.random() + start;
		return Math.floor(num);
	}
	let num = (end - start) * Math.random() + start;
	return num;
}

function Swap(array, x, y) {
	let temp = array[x];
	array[x] = array[y];
	array[y] = temp;
}
let pocker = new Poker();

pocker.shuffle();


