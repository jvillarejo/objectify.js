//Array methods implementation

Array.prototype.first = function() { 
  if( this.length > 0) {
    return this[0];
  } else { 
    return null;
  }
}