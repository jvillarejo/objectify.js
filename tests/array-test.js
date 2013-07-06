var assert = require("assert");
var array = require("../release/objectify")

describe('Array', function() { 
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
      var isEven = function(number) { 
        return (number % 2) == 0;
      }

      assert.equal(true, [1,2,3].any(isEven));
      assert.equal(false, [1,3,5].any(isEven));

    });
  });

});