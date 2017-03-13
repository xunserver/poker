function Publisher() {
  let event = {};
  this.on = function(e, fn, id) {
    if(!event[e]) event[e] = [];
    event[e].push({
      id: id,
      fn:fn
    });
  };
  this.emit = function (e, ...rest) {
    if(items = event[e]) {
      for(let i = 0, item; item = items[i++]; ) {
        item.fn.call(null, ...rest);
      }
    }
  };
  this.remove = function (e, id) {
    if(event[e]) {
        let index = event[e].find((e) => e.id == id);
        if(index != -1) {
          event[e].splice(index, 1);
        }
    }
  }
}

module.exports = Publisher;
