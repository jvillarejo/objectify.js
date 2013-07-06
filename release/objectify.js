//Array methods implementation
var array = Array.prototype;

array.first = function() { 
  if( this.length > 0) {
    return this[0];
  } else { 
    return null;
  }
};

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
