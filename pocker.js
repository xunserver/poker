function Pocker(n = 54) {
	let _decksArray = [];
	let _decks = [];
	const _length = n;

	// init
	for (let i = 0; i < _length; i++) {
		_decksArray[i] = i;
		_decks[i] = formatDeck(i);
	};
	// set/get
	this.getDecks = function () {
		return _decks;
	};
	this.getDecksArray = function () {
		return _decksArray;
	}

	// method
	this.shuffle = function () {
		let n = this.length - 1;
		for(let i = n; i >= 0; i--)   {  
		    Swap(_decksArray, i, rand(0, i + 1)); 
		} 
		for(let i = n; i >= 0; i--)   {  
		    this._decks[i] = formatDeck(_decksArray[i]);
		} 
	}
	this.show = function () {
		console.log(_decksArray, _decks);
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

module.exports = Pocker 


