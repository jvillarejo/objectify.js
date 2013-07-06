//Array methods implementation
var array = Array.prototype;

array.first = function() { 
  if( this.length > 0) {
    return this[0];
  } else { 
    return null;
  }
};

array.equals = function(otherArray) { 
  if(this.length != otherArray.length) { 
    return false;
  }

  for(var i = 0; i < this.length; i++) { 
    if( this[i] != otherArray[i]) {
      return false;
    }
  }
  return true;
}

array.last = function() { 
  if(this.length > 0) { 
    return this[this.length -1];
  } else {
    return null;
  }
};

array.any = function(condition) { 
  for(var i=0; i<this.length; i++) {
    if(condition(this[i])) {
      return true;
    }
  }
  return false;
};

array.all = function(condition) { 
  for(var i=0; i<this.length; i++) { 
    if(!condition(this[i])) {
      return false;
    }
  }
  return true;
}

array.collect = function(closure) { 
  var result = [];

  for(var i=0; i<this.length; i++) { 
    result.push(closure(this[i]));
  }

  return result;
}

array.select = function(closure) { 
  var result = [];

  for(var i=0; i<this.length; i++) {
    if(closure(this[i])) { 
      result.push(this[i]);
    }
  }

  return result;
}
