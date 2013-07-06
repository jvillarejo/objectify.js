var assert = require("assert");
var array = require("../release/objectify")

describe('Array', function() { 
  var isEven = function(number) { 
    return (number % 2) == 0;
  }

  describe('#equals',function() { 
    it('should return true if the two arrays contains the same exact objects', function() {
      assert( [1,2,3].equals([1,2,3]) );
      assert( ! [3,2].equals([3,2,1]) );
      assert( ["giggity", "giggity"].equals(["giggity", "giggity"] ));
    });
  })

  describe('#first()', function(){
    it('should return the first value of array or null if there is nothing', function() {
      assert.equal(1, [1,2,3].first());
      assert.equal(null, [].first());
    });
  });

  describe('#last', function() { 
    it('should return the las value of array or null if there is nothing', function() { 
      assert.equal(3, [1,2,3].last()); 
      assert.equal(null, [].last());
    });
  });

  describe('#any', function() { 
    it('should return true if any satisfy the condition or false if none', function() {
      assert.equal(true, [1,2,3].any(isEven));
      assert.equal(false, [1,3,5].any(isEven));

    });
  });

  describe('#all', function() { 
    it('should return true if all satisfy the condition if false if any doesn\'t satisfy',function() {
      assert.equal(true, [2,4,6].all(isEven));
      assert.equal(false, [2,5,6].all(isEven));
    });
  });

  describe('#collect', function() {
    it('should return another array with the results of the function with the array values as argument', function() {
      var multiplyBy2 = function(number) { 
        return number * 2;
      }

      var result = [1,2,3].collect(multiplyBy2);
      assert( [2,4,6].equals(result) );
    });
  });

  describe('#select', function() { 
    it('should return another array with the values that satisfy the condition', function() {
      var result = [2,4,7].select(isEven);

      assert( [2,4].equals(result));
    });
  });

});